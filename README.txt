# আল-কুরআন বাংলা — ওয়েব অ্যাপ প্যাকেজ

## এই ZIP-এ কী আছে
- `index.html`: মোবাইল-উপযোগী বাংলা UI, সূরা খোঁজা, আরবি আয়াত, বাংলা অনুবাদ, আরবি তিলাওয়াত, বাংলা অর্থের ব্রাউজার TTS।
- `manifest.json`: PWA ইনস্টল করার মৌলিক সেটিংস।
- `sw.js`: ওয়েব অ্যাপ shell cache করার service worker।

## চালানোর নিয়ম
1. ZIP extract করুন।
2. `index.html`-সহ তিনটি ফাইল একটি HTTPS static hosting-এ upload করুন (যেমন GitHub Pages বা Netlify)।
3. সাইট খুলে ইন্টারনেট চালু রাখুন। সূরার তালিকা ও আয়াত AlQuran Cloud API থেকে লোড হয়।
4. Android Chrome-এ live HTTPS site খুলে browser menu → **Install app** বা **Add to Home screen** চাপুন।

## গুরুত্বপূর্ণ সীমাবদ্ধতা
- এই ZIP একটি বাস্তব ওয়েব অ্যাপের starter, prebuilt Android APK নয়। APK তৈরি করতে Android Studio/Capacitor wrapper ও build/signing দরকার।
- কুরআনের সম্পূর্ণ ডেটা ZIP-এ offline embed করা হয়নি। API থেকে ডেটা সফলভাবে না এলে অ্যাপ সম্পূর্ণ কুরআন আছে বলে দাবি করে না।
- বাংলা অর্থ `bn.bengali` API edition থেকে চাওয়া হয়; সেটি পাওয়া না গেলে ত্রুটি দেখাবে।
- “উচ্চারণ-সহায়িকা” API-এর `en.transliteration` থেকে লাতিন হরফে আসে; এটি বাংলা হরফে উচ্চারণ নয় এবং আরবি তিলাওয়াত শেখার বিকল্প নয়।
- বাংলা অর্থের অডিওটি ফোন/ব্রাউজারের Text-to-Speech; এটি মানুষের রেকর্ড করা অনুবাদ-অডিও নয়।
- সম্পূর্ণ ১১৪ সূরা / ৬২৩৬ আয়াতের উপস্থিতি API-র response যাচাই না করে নিশ্চিত বলা যাবে না। প্রকাশের আগে ১:১ থেকে ১১৪:শেষ পর্যন্ত verse counts, অনুবাদ, অডিও ও licensing যাচাই করুন।

## উৎস ও attribution
- Quran text licensing: https://tanzil.net/docs/Text_License
- Quran API: https://alquran.cloud/api
- Quran Foundation API documentation: https://api-docs.quran.com/docs/api-reference/

Tanzil-এর আরবি পাঠ ব্যবহার করলে মূল পাঠ পরিবর্তন করা যাবে না; Tanzil-এর attribution ও link রাখতে হবে। অনুবাদ ও অডিওর নিজস্ব লাইসেন্স আলাদাভাবে যাচাই করতে হবে।
