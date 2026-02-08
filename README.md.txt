# Auto Survey Engine (Playwright)

A generic automation engine that logs in like a real user and solves surveys safely.
محرك أتمتة عام يقوم بتسجيل الدخول كمستخدم حقيقي ويحل الاستبيانات بشكل آمن.

---

## Features
- Works on Brave, Chrome, Firefox, and Opera.
- يعمل على بريف وكروم وفايرفوكس وأوبرا.

- Smart login detection (username/password).
- كشف ذكي لحقول تسجيل الدخول (اسم المستخدم وكلمة المرور).

- Generic survey solver (radio, select, text-based options).
- حل استبيانات عام (راديو، قوائم، خيارات نصية).

- JavaScript injection survives page refresh.
- حقن جافاسكربت يستمر بعد كل تحديث صفحة.

- No CAPTCHA or security bypass.
- بدون تجاوز كابتشا أو أنظمة حماية.

---

## Requirements
- Windows 10 or 11.
- ويندوز 10 أو 11.

- Node.js LTS.
- نسخة Node.js LTS.

- One of the supported browsers installed.
- أحد المتصفحات المدعومة مثبت على الجهاز.

---

## Installation
1. Install Node.js from https://nodejs.org
قم بتثبيت Node.js من الموقع الرسمي.

2. Clone the repository.
قم بنسخ المستودع من GitHub.

```bash
git clone https://github.com/YOUR_USERNAME/auto-survey-engine.git
cd auto-survey-engine
Install dependencies.
قم بتثبيت المكتبات المطلوبة.

bash
Copy code
npm install
npx playwright install chromium firefox
Usage
Run the script.
شغّل السكربت.

bash
Copy code
node autoSurvey.js
Choose browser, enter login URL, username, and password.
اختر المتصفح ثم أدخل رابط تسجيل الدخول واسم المستخدم وكلمة المرور.

The browser will open and automation will start automatically.
سيفتح المتصفح وتبدأ الأتمتة تلقائيًا.

Supported Survey Types
Radio buttons (ABCD, 1234, text).

أزرار اختيار (ABCD أو 1234 أو نصوص).

Select dropdown questions.

أسئلة القوائم المنسدلة.

Reload-based or simple navigation surveys.

استبيانات تعتمد على إعادة تحميل الصفحة أو تنقل بسيط.

Limitations
Does not work with CAPTCHA or OTP.

لا يعمل مع الكابتشا أو التحقق الثنائي.

Advanced bot-protected sites may require tuning.

المواقع ذات الحماية العالية قد تحتاج ضبط إضافي.

Disclaimer
This project is for personal, educational, and authorized use only.
هذا المشروع للاستخدام الشخصي والتعليمي وبموافقة صريحة فقط.

The author is not responsible for misuse.
المطوّر غير مسؤول عن أي استخدام خاطئ.
