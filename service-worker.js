self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through — network first, no offline caching needed for now
  event.respondWith(fetch(event.request));
});
