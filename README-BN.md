# Mumin App Store — প্রথম সংস্করণ

এটি Mumin App Store-এর প্রথম PWA frontend prototype।

## এখন যা কাজ করে
- Responsive app marketplace interface
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

এই ফিচারগুলো পরবর্তী ধাপে backend-এর সঙ্গে যুক্ত হবে। এখনকার demo catalog `app.js` ফাইলে আছে।

## চালানোর নিয়ম
1. ফোল্ডারটি GitHub repository-তে upload করো।
2. GitHub Pages চালু করো, অথবা Cloudflare Pages-এ deploy করো।
3. HTTPS URL খুলে Chrome-এর menu থেকে Install app ব্যবহার করো।

## গুরুত্বপূর্ণ
`app.js`-এ যেসব অ্যাপের URL `#`, সেগুলো demo placeholder; আসল লিংক পাওয়া গেলে বদলাতে হবে। APK সরাসরি প্রকাশের আগে ফাইল নিরাপত্তা, malware scanning, versioning ও Android install flow তৈরি করতে হবে।