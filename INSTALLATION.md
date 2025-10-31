# راهنمای نصب کامل - Brainscape RTL Fixer

## مرحله 1: ایجاد آیکون‌ها

شما 3 روش برای ایجاد آیکون‌ها دارید:

### روش 1: استفاده از HTML Template (سریع‌ترین)

1. فایل `icon-template.html` را در مرورگر باز کنید
2. از ابزار Snipping Tool یا screenshot گرفته و آیکون‌ها را ذخیره کنید:
   - یک مربع 16x16 پیکسلی بگیرید و به عنوان `icon16.png` ذخیره کنید
   - یک مربع 48x48 پیکسلی بگیرید و به عنوان `icon48.png` ذخیره کنید
   - یک مربع 128x128 پیکسلی بگیرید و به عنوان `icon128.png` ذخیره کنید

### روش 2: استفاده از سایت‌های آنلاین

1. به یکی از این سایت‌ها بروید:
   - https://www.favicon-generator.org/
   - https://favicon.io/
   - https://realfavicongenerator.net/

2. یک تصویر آپلود کنید یا متن "RTL" یا "فا" را وارد کنید
3. سایز‌های 16x16، 48x48 و 128x128 را دانلود کنید

### روش 3: دانلود آیکون آماده

1. به https://www.flaticon.com بروید
2. یک آیکون مناسب (مثلاً right-to-left, text direction, Persian) جستجو کنید
3. آیکون را در سایز‌های مختلف دانلود کنید

### روش 4: استفاده از Paint یا Photoshop

1. یک کانواس 128x128 ایجاد کنید
2. پس‌زمینه رنگی اضافه کنید (مثلاً بنفش یا آبی)
3. متن "RTL" یا "فا" را اضافه کنید
4. فایل را به عنوان `icon128.png` ذخیره کنید
5. Resize کنید برای سایز‌های 48x48 و 16x16

## مرحله 2: نصب اکستنشن

1. **Chrome را باز کنید**

2. **به صفحه Extensions بروید:**
   - آدرس `chrome://extensions/` را در آدرس بار وارد کنید
   - یا از منو: ⋮ (سه نقطه) → Extensions → Manage Extensions

3. **Developer Mode را فعال کنید:**
   - در گوشه بالا راست صفحه، کلید "Developer mode" را روشن کنید

4. **Load Unpacked:**
   - روی دکمه "Load unpacked" کلیک کنید
   - پوشه `d:\power\brainscape-rtl-extension` را انتخاب کنید
   - روی "Select Folder" کلیک کنید

5. **تایید نصب:**
   - اکستنشن در لیست ظاهر می‌شود
   - مطمئن شوید که فعال است (toggle آبی باشد)

## مرحله 3: استفاده

1. به سایت https://www.brainscape.com بروید
2. یک دک با کارت‌های فارسی باز کنید
3. متن‌های فارسی باید به صورت خودکار RTL نمایش داده شوند!

## عیب‌یابی

### اگر آیکون خطا می‌دهد:

اگر آیکون‌ها ندارید، می‌توانید موقتاً آن‌ها را از manifest.json حذف کنید:

بخش `"icons"` را پاک کنید یا comment کنید:

```json
{
  "manifest_version": 3,
  "name": "Brainscape RTL Fixer",
  "version": "1.0.0",
  "description": "Fix RTL display for Persian/Farsi text on Brainscape",
  "permissions": [],
  "content_scripts": [
    {
      "matches": ["https://www.brainscape.com/*"],
      "js": ["content.js"],
      "css": ["rtl-styles.css"],
      "run_at": "document_end"
    }
  ]
}
```

### اگر RTL کار نمی‌کند:

1. Console را باز کنید (F12)
2. ببینید پیام "Brainscape RTL Fixer loaded!" نمایش می‌دهد یا نه
3. صفحه را Refresh کنید (F5)

## ساختار فایل‌ها

```
brainscape-rtl-extension/
├── manifest.json          (تنظیمات اکستنشن)
├── content.js            (کد اصلی JavaScript)
├── rtl-styles.css        (استایل‌های RTL)
├── icon16.png            (آیکون 16x16)
├── icon48.png            (آیکون 48x48)
├── icon128.png           (آیکون 128x128)
├── README.md             (راهنما)
├── INSTALLATION.md       (این فایل)
└── icon-template.html    (Template برای ساخت آیکون)
```

موفق باشید! 🎉
