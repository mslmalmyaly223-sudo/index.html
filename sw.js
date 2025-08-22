// خفيف وبسيط: يفعّل الـ SW فورًا ويستلم التحكم بكل التبويبات
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// تمرير كل الطلبات بدون كاش (نقدر نضيف كاش لاحقًا لو حبيت)
self.addEventListener('fetch', () => {});
