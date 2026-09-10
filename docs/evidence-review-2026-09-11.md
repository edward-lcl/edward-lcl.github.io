# Evidence review — 11 September 2026

Photo accepted by Edward; retained unchanged. Reviewed the two older evidence gaps identified in the notebook pass. No new model calls or paid experiments.

## Model-tier comparison

Read-only public clone: `/tmp/site-harness-evidence-20260911`, commit `be175a0ae84bc92cdf8b703ac9660386c4e56a79`.

Inspected the result inventory, frozen batteries, git history for probe files, comparator implementation, and validation scripts. The public commit includes 3-, 15-, and 44-probe frozen batteries. Validation scripts name later April 19 snapshots and an expanded battery that are absent from this checked release. Removed the unsupported expanded-battery and repeatability headlines from the public note; this is not a claim that those experiments never occurred.

Selected the lexically latest fully successful committed 44-probe run per tier. Excluded an earlier Opus run containing 44 errors. Applied the public `_compare_responses` function without importing the emitting snapshot workflow: extracted only its dataclass and comparison function, supplied the declared 0.50 length threshold, grouped shared prompt IDs by category, rounded category rates to three decimals, and averaged categories as the source does. No ontology state was read or written.

Recomputed category means: Haiku→Sonnet 0.878, Haiku→Opus 0.792, Sonnet→Opus 0.798. Exact source-file selections and per-category counts are in `public/artifacts/harness-map/archived-comparison.json`. All selected records were error-free. No refusal-label flips occurred. High flag rates in refusal-category responses therefore do not establish changed refusal decisions. The heuristic detects length, lexical, and identity-prefix changes and is direction-dependent; it is not a semantic correctness or safety metric.

## Education discussion

Read the original Medium essay: https://medium.com/@eluecheelip/how-ai-exposed-the-lie-inside-education-87fe8baecbc8 . Its methods describe exploratory coding of 71 responses from one self-selected discussion. Its categories explicitly include student or student-sympathetic voices. Updated the notebook accordingly. Did not independently recode the underlying comments or verify respondents' identities.

## Validation and boundary

Full privacy/build/link/fragment/asset checks pass across 36 pages. `git diff --check` passes. No research-paper results, accepted authorship, approved essays, or photo were changed. Browser visual inspection remains pending from the earlier tooling limitation. Changes remain local and unpushed.
