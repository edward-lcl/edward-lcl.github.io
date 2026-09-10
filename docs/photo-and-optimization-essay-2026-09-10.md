# Photo and notebook pass · 10 September 2026

Baseline: clean `main` at `c85d590`, the deployed bilingual refinement pass.

## Photograph

Selected the first dog photo (uploaded Photo 2), as requested: a candid smile with the small black dog. One image is enough. Both homepages now use the original JPEG, unchanged, with localized alt text. A fixed square CSS viewport removes the black bars, roof and excess shirt from the displayed composition while keeping both faces legible at 184px. No generated facial pixels, color changes or retouching are used. The uploaded JPEG contains no EXIF block. Other uploaded photos were not published; no external photo library was accessed.

An image-tool crop trial was rejected because it reconstructed/sharpened detail. It remains outside the repository. Its prompt requested a tight square, both faces, removal of letterboxing, exact identity/texture/lighting preservation, and no reconstruction, beautification, background replacement or text. The built-in image tool was used for that rejected trial; the delivered image is the byte-identical uploaded photograph, framed through CSS.

Asset: `public/edward-with-dog.jpg`.
SHA256: 03ce83ae5d73570ff6f8ae26c70893e1a1fbfd02e80f1a5c5216ed98f41fcf1e

## Essay

“Optimization without an optimizer” is a seven-section working synthesis. The opening uses the user's dream/loss-of-control framing without inventing dream scenes or interpreting it as clinical or empirical evidence. Many local incentives can produce a direction without one global intention; the essay explicitly rejects treating that as proof of a coherent civilizational objective function or runaway RSI.

The argument includes labs, capital, states, surveillance, institutions and human cognition as possible feedback paths. It returns to conditional verifier manipulation, correlated errors, pluralism as a fault-tolerance hypothesis, separation of powers and distributed corrigibility. Research links lead to the existing digests; no numerical findings or paper scopes changed. No new external factual claims or biographical events were added. This is an AI-assisted draft for author review.

Featured first in recent writing on the English homepage and notebook index; added a native Chinese introduction/link on the Chinese homepage. Kept the existing framework and three entry-point cards. Corrected the notebook's stale August-only heading and made the recent-essay continuation links cycle through all three essays.

## Checks

`npm run check`: privacy scan, 34 built pages, 209 internal fragment references and local assets pass. Desktop/mobile review of the original photo and new essay; section navigation checked. No new network-dependent assets. Existing image remains in Git history and as an unused tracked asset; it is no longer used on either homepage. Changes are local until separately committed and published.
