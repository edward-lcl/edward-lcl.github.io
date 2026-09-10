# Research and project visual pass

- Added a no-JavaScript Recall Debt explainer using native radio controls. Fictional notes illustrate direct retrieval versus following an intermediate name. The example is explicitly not a benchmark observation or live retriever. Both states remain available without JavaScript; keyboard focus is visible and labels have 48px minimum height.
- Kept quantitative evidence separate. Recall bars use a horizontal 0–100% scale and identify the 159-chain selected subset and oracle-assisted bridge condition. Zero values have no artificial filled length.
- Removed an isolated teacher F1 annotation from the distillation schematic in favor of the setup condition, keeping the schematic focused on information transfer.
- Added three-stage role/workflow diagrams for Brewery Control Systems and POP2. No private drawings or unverified experimental outcomes were introduced.
- Reading-page-only contrast tokens darken quiet and secondary copy. Enlarged metadata, navigation, evidence notes, and system annotations; stronger diagram outlines and chart fills. Compact homepage sketches retain their layout.

Checks: npm run check passed (privacy, 36-page build, internal links/assets/fragments); git diff --check passed. Source-colour contrast calculations: metadata 5.72:1, secondary text 6.56:1, diagram annotations 9.85:1, diagram labels 7.49:1, outlines 4.56:1, slate bars 5.26:1, blue bars 5.17:1. These are targeted checks, not a full accessibility certification.

Built HTML verifies unique labelled native controls and separation of illustration from results. Local server serves the explainer. Browser inspection failed with “Unable to load browser request-header policy”; visual layout, interaction, mobile/zoom, and assistive-technology checks remain unverified. No push was performed.
