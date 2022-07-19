const staticDevCoffee = 'pwa-demo-cache';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/images/coffee1.jpg',
  '/images/coffee2.jpg',
  '/images/coffee3.jpg',
  '/images/coffee4.jpg',
  '/images/coffee5.jpg',
  '/images/coffee6.jpg',
  '/images/coffee7.jpg',
  '/images/coffee8.jpg',
  '/images/coffee9.jpg',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(pwaDemoCache).then((cache) => {
      cache.addAll(assets);
    })
  );
});
