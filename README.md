# Harsimar Singh Toor — Modeling Portfolio

Next.js + Tailwind. Runs the same way as before:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Updating the site

**Everything you'd normally change lives in one file: `data/portfolio.js`.**

| I want to…                         | Do this                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------- |
| Add a photo to *Selected Works*    | Put the JPG in `public/images/`, add one line to `works` in the data file |
| Add a new project (*Experience*)   | Put photos in `public/images/`, copy a block in `projects`, edit it     |
| Change height / hair / eyes etc.   | Edit `stats`                                                            |
| Change brand partnerships          | Edit `partners`                                                         |
| Add email / phone / WhatsApp       | Fill in `contact` — a tap-to-contact row appears on the Contact page    |
| Change "accepting bookings for…"   | Edit `contact.availability`                                             |

Tips
- Photos: JPG, around 1500–2000px on the long side keeps pages fast on phones.
  (Next.js also resizes them automatically for each device.)
- Videos: `.mp4`, keep them short and compressed (720p is plenty).
- In `works`, 9, 15 or 21 photos fill the grid with no gaps on phone and desktop.
- The first photo in `works` is shown full-width on phones — put your best one there.

## Link previews

When the site is shared in iMessage/WhatsApp, the cover photo shows up as the preview.
On Vercel this works automatically; on another host set `NEXT_PUBLIC_SITE_URL` to your domain.
