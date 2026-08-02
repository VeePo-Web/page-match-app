# Parker Photo Library (Backend Only)

A central place to store every photo of Parker, so any page — on this site or a future one — can pull from it. No changes to the current pages' design.

Note: 7 photos were uploaded, not 8. I'll load all 7; send the missing one anytime and it can be added.

## What gets built

1. **Lovable Cloud enabled** — gives the project a database, storage, and functions with no external account.
2. **A public storage bucket `parker-photos`** — the "backend folder". Publicly readable so any website can use the image URLs directly; only signed-in admins can upload or delete.
3. **The 7 photos uploaded**, cropped first:
   - Black letterbox bars and the iPhone status bar trimmed off the three screenshots (red-lit keys, mountain portrait, living-room piano) and the other phone screenshots.
   - Each saved with a clean descriptive filename (e.g. `wedding-yamaha-ballroom.jpg`, `stage-nord-red-light.jpg`, `flower-arch-portrait.jpg`).
4. **A `photos` table** holding metadata for each image: file path, public URL, title, alt text, category (wedding / live / teaching / portrait / archive), display order, created date. Public read, admin-only write. This is what other sites or pages query to list photos.
5. **An admin page at `/admin/photos`** (not linked in the site nav) to drag-and-drop new photos, set title/alt/category, reorder, and delete. Requires sign-in.
6. **Admin sign-in** — email/password plus Google, with an admin role table so only Parker can manage photos. Everyone else, including logged-out visitors, can only read.

## Not included

- No changes to existing page backgrounds or layouts. Existing pages keep their current images until you ask to swap them.

## Technical notes

- Cropping done with a one-off image script before upload; originals stay untouched in uploads.
- `photos` table: `id`, `storage_path`, `title`, `alt_text`, `category`, `sort_order`, `created_at`. RLS: `SELECT` for anon + authenticated; `INSERT/UPDATE/DELETE` gated on `has_role(auth.uid(), 'admin')` with roles in a separate `user_roles` table.
- Public URLs follow `.../storage/v1/object/public/parker-photos/<path>`, usable from any external site.
- Admin route lazy-loaded in `App.tsx` alongside the existing routes; auth guard redirects non-admins.
