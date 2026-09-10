# Artifact and publication review — 11 September 2026

## Completed scope

Reviewed all six research records and four public project records. Added a source-material section to each, with immutable GitHub links where a reviewed commit was available. Added two original project/paper figures (plus the documentation figure's mobile version), keeping their original bytes and provenance in `public/artifacts/research/provenance.json`.

## Findings and decisions

| Page | Finding | Action |
| --- | --- | --- |
| Recall Debt | Retained manuscript/repository is not public; no public paper or proceedings URL verified in this pass. | Keep private material private; explicitly state public artifact pending. Do not represent the illustrative diagram as a released experiment. |
| Before You Scale | Public repository manuscript `b80a1d0` includes a verified transfer null and later 3B format-matched gold-supervision controls. Its anonymous manuscript title differs from the site shorthand. | Link the exact PDF and revision, name the manuscript explicitly, update the stale larger-student-next-step paragraph. Do not label the PDF as a verified proceedings edition. |
| Diagnosing Agent Capabilities | Public source at `1b6d859` includes active environments and manuscript source titled Knockout Evaluation of Hidden-Mechanic Discovery Under Partial Observability. | Link pinned source; retain scoped method description. Do not promote development heatmaps to final results. |
| Factor(U,T) | arXiv:2512.14745v1, submitted 12 Dec 2025, explicitly records AAAI 2026 TrustAgent acceptance. | Recheck publication metadata, correct CV citation title to the public title, distinguish preprint and workshop dates, link paper's implementation branch. |
| Parkinson's EEG audit | Public repository `0fbe802` README, figure, and manuscript source show an older 0.927 segment-level null, rather than the digest's retained-manuscript 0.901. | Explicitly surface version mismatch. Link older source as a version comparison, not evidence for 0.901. Do not add the older plot as the current result. |
| Hidden CoT | arXiv:2608.29956v1 was submitted 30 Aug 2026, with eight authors and a public code link. | Replace stale artifact-pending digest. Add missing author Abdullah Sultan in shared metadata; update CV paper link. Describe HCDS as comparative behavior, not direct detection of a hidden trace. Include original Appendix G / Figure 4 output-length-tier plot, with exact scope. |
| Eval Evidence | Public `6d4a25b` is unchanged from the earlier reproducible walkthrough; source identifies 0.2.0rc1 and review limits. | Add original envelope-anatomy documentation figure with its dedicated mobile source; retain pre-release and integrity-only scope. |
| Circuit Compass | Implementation not currently public. | Explicit source-availability note; no collaborator data or private artifacts copied. |
| Brewery | Operating drawings private. | Explicit case-note boundary; no private drawings copied. |
| POP2 | Public companion `6b7dc74` contains placeholder images, not verified experimental figures. | Link pinned companion; do not present placeholders as bench evidence. |

Public title searches and targeted OpenReview searches did not verify new proceedings records for the pending items. Search absence is not proof that no record exists. Previously recorded acceptance statuses were not silently re-dated as newly verified. This pass verifies publication/artifact availability, not scientific replication.

## Verification

- `npm run check`: privacy scan, 37-page static build, internal links/fragments/assets passed.
- `git diff --check`: passed.
- External-link sweep: 52 distinct HTTPS URLs, 46 HTTP 200 responses, one HTTP 202 response from OUP (content not confirmed), five 403/429 responses. Exact outcomes in `artifact-link-check-2026-09-11.json`. No confirmed 404 among current site links. HTTP success alone does not verify a source claim.
- New research/artifact destinations resolved; inspected public PDFs/source and original figure contents before use.
- Hidden CoT figure loads in browser at phone width. Eval Evidence loads its distinct mobile figure.
- Keyboard ArrowRight changes the Recall Debt radio state; Space opens the knockout disclosure.
- All ten artifact pages and CV checked at 320px. Found and fixed long navigation-label overflow on Eval Evidence/POP2 and a narrow knockout-grid overflow; retests returned 320px document width.
- Browser zoom shortcuts had no effect in the in-app browser, so actual 200% zoom remains unverified. Narrow-screen reflow is separately verified. This is not a complete assistive-technology audit.

## Remaining boundaries

The audit and local implementation are complete. Public release of retained/private research artifacts and the EEG final-version reconciliation require separate research-release work; neither is implied by publishing this site. Some external sites block automated checking. No git commit, push, or deployment was performed in this pass.
