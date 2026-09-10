# Portrait reframing

Used built-in ImageGen to edit the uploaded first dog photo (Photo 2). The result is an AI-edited photographic reframing, not an unchanged source crop. Visually inspected the generated result: the complete head has room on the left and the dog remains beside Edward. Identity fidelity remains a matter for Edward's review. Original photos and earlier assets are retained.

Generated master: /Users/edward/.codex/generated_images/01a08b25-a8f4-7e43-adab-3fb999bfde3b/exec-5f5a834a-9093-475e-b442-f6efc40587ba.png

Site asset: public/edward-with-dog-reframed.webp (768 × 768). Sharp only downsized and encoded the generated image. Both homepages display the full square at 220 CSS pixels, constrained to available width. No offset or overflow cropping remains.

## Exact ImageGen prompt

Edit this actual photograph for a personal website profile card. Remove the black letterboxing. Create a square photographic composition with the man's full face comfortably inside the frame, approximately centered at 43% of the image width; the small black dog stays beside him toward the right and secondary. Keep his original face, expression, age, skin texture, hair, casual clothing, and the dog's appearance faithful to the photo. Keep the casual car setting and natural existing light. Show his complete head with modest breathing room and upper shoulders, not an extreme facial zoom. Use only restrained reframing and minimal background extension on the left where necessary to avoid cutting off his face. Do not beautify, smooth skin, stylize, change his features, create a corporate headshot, add text, or add objects. The result should feel like the same warm candid photo, suitably framed for a small website image.

Validation: npm run check passes all 36 pages; git diff --check passes. Rendered-page desktop/mobile visual checks remain pending. Local only, not pushed.
