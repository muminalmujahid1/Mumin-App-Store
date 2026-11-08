# Mumin App Store — প্রথম সংস্করণ

এটি Mumin App Store-এর PWA frontend starter।

## ব্র্যান্ডিং
- `assets/mumin-app-store-logo.jpg` — আপনার দেওয়া আসল Mumin App Store লোগো।
- `assets/icon-192.png` এবং `assets/icon-512.png` — একই লোগোর PWA ইনস্টল আইকন।
- `assets/apple-touch-icon.png` — একই লোগোর Apple touch icon।
- ওয়েবসাইটের header, browser icon এবং install icon-এ একই ব্র্যান্ড লোগো ব্যবহার করা হয়েছে।

অ্যাপের তালিকায় প্রতিটি আলাদা অ্যাপের নিজস্ব icon/emoji রাখা হয়েছে; এগুলো Store-এর লোগো নয়।

## এখন যা কাজ করে
- Responsive marketplace interface
- Search এবং category filter
- App details popup
- Mumin AI-এর live link
- PWA manifest এবং service worker
- Browser সমর্থন করলে Install Store prompt

## এখনো যা তৈরি হয়নি
- Admin login
- Secure APK / image upload
- Cloudflare D1 database
- Cloudflare R2 storage
- Developer payment system
- Native Android APK packaging

## GitHub Pages-এ প্রকাশ
1. ZIP extract করুন।
2. Extract করা `mumin-app-store` ফোল্ডারের ভেতরের সব ফাইল ও `assets` ফোল্ডার repository root-এ upload করুন; `mumin-app-store` নামের অতিরিক্ত outer folder upload করবেন না।
3. GitHub Pages চালু করুন: Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save।
4. প্রকাশিত HTTPS URL Chrome-এ খুলে Install Store ব্যবহার করুন।

`app.js`-এ যেসব অ্যাপের URL `#`, সেগুলো demo placeholder; আসল URL যোগ করতে হবে।
