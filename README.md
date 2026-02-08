# Auto Survey Engine

A generic browser automation tool that logs in like a real user and automatically solves surveys.

---

## Features
- Supports Brave, Chrome, Firefox, and Opera browsers.
- Smart detection of username and password fields.
- Generic survey solver (radio buttons, dropdowns, various option formats).
- JavaScript injection that survives page refresh.
- No CAPTCHA or security bypass.

---

## Requirements
- Windows 10 or Windows 11
- Node.js (LTS version)
- One supported browser installed

---


## Installation

### 1. Install Node.js
Download and install the LTS version of Node.js from:

```
https://nodejs.org
```
### 2. Clone the repository
Clone the project from GitHub:


```
git clone https://github.com/ahmad-n00r/auto-survey-engine.git
cd auto-survey-engine
```

> All commands must be executed from inside the project folder.

## Usage

Before running the script, make sure everything is inside a single directory.

### Step 1: Create a project folder
Create a new folder (for example):

```
mkdir auto
cd auto
```
### Step 2: Place the file inside the folder
Make sure the following file exists inside the folder:

- `autoSurvey.js` – contains all automation logic (browser selection, login, survey handling).



### Step 3: Install dependencies
Run the following commands inside the same folder:


```
npm install
npx playwright install chromium firefox
```
### Step 4: Run the script
Execute the script from inside the folder:


```
node autoSurvey.js
```
You will be prompted to enter:

Browser type (brave / chrome / firefox / opera)

Login page URL

Username

Password

The browser will open automatically and automation will start.
No additional configuration files are required.

## Supported Survey Types

- Radio buttons (ABCD, 1234, text-based options)
- Select dropdown questions
- Reload-based or simple navigation surveys


## Limitations
- CAPTCHA and OTP are not supported
- Advanced bot-protected websites may require tuning


## Disclaimer
This project is intended for personal, educational, and authorized use only.

The author is not responsible for any misuse.

## Author

ahmad-n00r

## License

MIT License



---



# محرك حل الاستبيانات التلقائي

أداة أتمتة عامة للمتصفح تقوم بتسجيل الدخول كمستخدم حقيقي وحل الاستبيانات تلقائيًا.

---

## الميزات
- يدعم متصفحات بريف وكروم وفايرفوكس وأوبرا.
- كشف ذكي لحقول اسم المستخدم وكلمة المرور.
- حل استبيانات عام (أزرار اختيار، قوائم منسدلة، صيغ مختلفة).
- حقن جافاسكربت يستمر بعد إعادة تحميل الصفحة.
- بدون تجاوز كابتشا أو أنظمة حماية.

---

## المتطلبات
- ويندوز 10 أو ويندوز 11
- Node.js نسخة LTS
- أحد المتصفحات المدعومة مثبت على الجهاز

---

## التثبيت

### 1. تثبيت Node.js
قم بتنزيل وتثبيت نسخة LTS من Node.js من الموقع التالي:

```
https://nodejs.org
```
### 2. نسخ المستودع
قم بنسخ المشروع من GitHub:

```
git clone https://github.com/ahmad-n00r/auto-survey-engine.git
cd auto-survey-engine
```
### 3. تثبيت المكتبات
قم بتثبيت المكتبات المطلوبة:

```
npm install
npx playwright install chromium firefox

```
## طريقة التشغيل

قبل تشغيل السكربت، يجب وضع كل شيء داخل مجلد واحد.

### الخطوة 1: إنشاء مجلد للمشروع
قم بإنشاء مجلد جديد (مثال):

```
mkdir auto
cd auto

```
### الخطوة 2: وضع الملف داخل المجلد
تأكد من وجود الملف التالي داخل نفس المجلد:

- `autoSurvey.js` – يحتوي على كامل منطق التشغيل.



### الخطوة 3: تثبيت المكتبات
من داخل نفس المجلد، نفّذ الأوامر التالية:


```
npm install
npx playwright install chromium firefox

```
### الخطوة 4: تشغيل السكربت
شغّل السكربت من داخل المجلد:

```
node autoSurvey.js

```
سيُطلب منك إدخال:

نوع المتصفح (brave / chrome / firefox / opera)

رابط صفحة تسجيل الدخول

اسم المستخدم

كلمة المرور

سيتم فتح المتصفح تلقائيًا وتبدأ الأتمتة مباشرة.
لا توجد أي ملفات إعدادات إضافية

## أنواع الاستبيانات المدعومة
- أزرار اختيار (ABCD أو 1234 أو نصوص)
- أسئلة القوائم المنسدلة
- استبيانات تعتمد على إعادة تحميل الصفحة أو تنقل بسيط


## القيود
- الكابتشا والتحقق الثنائي غير مدعومين
- المواقع ذات الحماية العالية قد تحتاج ضبط إضافي


## إخلاء المسؤولية
هذا المشروع مخصص للاستخدام الشخصي والتعليمي وبموافقة صريحة فقط.

المطوّر غير مسؤول عن أي استخدام خاطئ.

## المطوّر
ahmad-n00r


