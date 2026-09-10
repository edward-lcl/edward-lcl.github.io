"""Synthetic byte-integrity demonstration. Requires the pinned Eval Evidence install.
Creates a fresh temporary directory; never reads an existing evaluation archive.
"""
import hashlib
import importlib.metadata
import json
from pathlib import Path
import platform
import subprocess
import sys
import tempfile

SOURCE_COMMIT = "6d4a25b5f288f9646f30e0d1c9f5923cc6c1ec8c"
root = Path(tempfile.mkdtemp(prefix="eval-evidence-walkthrough-"))
run = root / "run"
bundle = root / "evidence.json"
receipts = []


def step(name, args, expected=0):
    result = subprocess.run([sys.executable, "-m", "eval_evidence", *map(str, args)], capture_output=True, text=True)
    # Normalize only temporary paths in the report, not the actual input or bundle.
    output = result.stdout.replace(str(root), "<workspace>")
    try:
        output = json.loads(output)
    except json.JSONDecodeError:
        pass
    receipts.append({"step": name, "exit_code": result.returncode, "stdout": output, "stderr": result.stderr.replace(str(root), "<workspace>")})
    if result.returncode != expected:
        raise RuntimeError(f"{name}: expected exit {expected}, got {result.returncode}: {result.stderr}")


step("create synthetic fixture", ["demo", "-o", run])
step("check current evidence", ["check", run])
step("save baseline", ["bundle", run, "-o", bundle])
step("verify unchanged files", ["verify", bundle, "--run-root", run])
baseline_sha256 = hashlib.sha256(bundle.read_bytes()).hexdigest()
score = run / "outputs" / "scores.json"
before = json.loads(score.read_text())
after = {**before, "accuracy": 1.0}
score.write_text(json.dumps(after, indent=2, sort_keys=True) + "\n")
step("verify bundle only after mutation", ["verify", bundle])
step("verify referenced files after mutation", ["verify", bundle, "--run-root", run], expected=1)
assert hashlib.sha256(bundle.read_bytes()).hexdigest() == baseline_sha256
receipt = {
    "source_commit": SOURCE_COMMIT,
    "source_commit_note": "Required installation pin; this script does not authenticate the installed source.",
    "python": platform.python_version(),
    "package_version": importlib.metadata.version("eval-evidence"),
    "jsonschema_version": importlib.metadata.version("jsonschema"),
    "synthetic": True,
    "changed_file": "outputs/scores.json",
    "before": before,
    "after": after,
    "baseline_unchanged": True,
    "steps": receipts,
}
(root / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
print(json.dumps(receipt, indent=2))
print(f"\nFiles kept at {root}", file=sys.stderr)
