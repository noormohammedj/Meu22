FemmeDress — Final PWA Package

What's included:
- index.html (catalog, contact form, WhatsApp integration)
- checkout.html (Razorpay client-side integration placeholder)
- thankyou.html
- admin.html (password: M3uN3Wl@unch) - edit catalog.json, download/upload
- catalog.json (editable)
- manifest.json, sw.js, styles.css
- icons and sample images

Notes:
- Netlify form is enabled (form name="contact"). Deploy to Netlify to capture submissions.
- WhatsApp chat button opens chat with +91-9952591596.
- Razorpay: checkout uses client-side checkout with placeholder key 'RAZORPAY_KEY_PLACEHOLDER'.
  For production, implement server-side order creation and replace the key and flow.
- Admin UI: due to static hosting, the editor can't save files to your host. Edit and download the updated
  catalog.json and upload it to your host (or update via your Git).
- Google Analytics: placeholder 'G-XXXXXXX' in index.html. Replace with your ID.

Deploy:
- Upload folder to Netlify / Vercel / GitHub Pages (Netlify recommended for form capture).
