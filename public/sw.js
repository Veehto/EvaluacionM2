const CACHE_NAME = 'pwa-cache-v1'; // name of the cache storage.
const urlsToCache = [
    '/', 
    '/index.html', 
    '/main.html', 
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/icons/icon-72x72.png',
    '/src/index.css',
    '/src/App.css',
    '/src/main.jsx',
    '/src/App.jsx',
    '/images/alicia-marambio.png',
    '/images/carmen-lopez.png',
    '/images/doctor-placeholder.png',
    '/images/esteban-fernandez.png',
    '/images/juan-perez.png',
    '/images/morin-salinas.png',
    '/images/pablo-garcia.png',
    '/images/pablo-urrutia.png',
    '/images/pedro-messina.png',
    '/src/components/AppointmentForm.jsx',
    '/src/components/Appointments.jsx',
    '/src/components/ConfirmationModal.jsx',
    '/src/components/DoctorCard.jsx',
    '/src/components/DoctorForm.jsx',
    '/src/components/DoctorList.jsx',
    '/src/components/DoctorListContent.jsx',
    '/src/components/DoctorModal.jsx',
    '/src/components/EditDoctorForm.jsx',
    '/src/components/Narrative.jsx',
    '/src/components/Notification.jsx',
    '/src/components/Overlays.jsx',
    '/src/components/ServiceList.jsx',
    '/src/components/StatusMessage.jsx',
    '/src/components/WelcomeHero.jsx',
    '/src/contexts/AuthContext.jsx',
    '/src/contexts/DoctorContext.jsx',
    '/src/hocs/HOCServices.jsx',
    '/src/layouts/MainLayout.jsx',
    '/src/routes/AppRoutes.jsx',
    '/src/routes/SecureRoute.jsx',
    '/src/services/service.js',
    '/src/utils/encryption.js',
    '/src/views/AppointmentsFormView.jsx',
    '/src/views/AppointmentsView.jsx',
    '/src/views/Dashboard.jsx',
    '/src/views/DoctorListView.jsx',
    '/src/views/Home.jsx',
    '/src/views/Login.jsx',
    '/src/views/ServiceListView.jsx'
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