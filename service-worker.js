var cacheName = 'afterschool-demo';
var cacheFiles = [
    'index.html',
    'afterschool.webmanifest',
    'images/icon.png',
    'images/product-maths.jpg',
    'service-worker.js'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
        console.log('[Service Worker] Caching all the files');
        return cache.addAll(cacheFiles);
        })
    );
});



self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (r) {
            // Download the file if it is not in the cache,
            return r 
        })
    );
});