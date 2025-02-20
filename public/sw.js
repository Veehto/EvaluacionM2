const CACHE_NAME = 'pwa-cache-v1'; // name of the cache storage.
const urlsToCache = [
    '/', 
    '/index.html', 
    '/main.html', 
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/src/index.css',
    '/src/App.css',
    '/src/main.jsx',
    '/src/App.jsx',
]; //array of URLs that will be cached during the service worker installation.

// Install a service worker
self.addEventListener('install', event => {
    event.waitUntil(
        (async () => {
            try {
                const cache = await caches.open(CACHE_NAME);
                console.log('Opened cache');
                await cache.addAll(urlsToCache);
            } catch (error) {
                console.error('Failed to open cache or add resources to cache:', error);
            }
        })()
    );
});

// cache-first strategy, NO cache Update
/*
self.addEventListener('fetch', event => {
    event.respondWith(
        (async () => {
        const cachedResponse = await caches.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })()
    );
});
*/


// stale-while-revalidate strategy
self.addEventListener('fetch', event => {
    event.respondWith(caches.open(CACHE_NAME)
        .then(async cache => {
            const response = await cache.match(event.request);
            const fetchPromise = fetch(event.request)
                .then(networkResponse => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
        })
    );
});