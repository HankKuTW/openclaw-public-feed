const CACHE_NAME = "mood-anchor-en-cache-20260705";
const CACHE_PREFIX = "mood-anchor-en-cache-";
const ASSETS = [
  "mood-anchor-en-20260705.html",
  "mood-anchor-care-card-en-20260705.html",
  "mood-anchor-support-scripts-en-20260705.html",
  "mood-anchor-onboarding-checklist-en-20260705.html",
  "mood-anchor-low-mood-card-en-20260705.html",
  "mood-anchor-activity-experiment-board-en-20260705.html",
  "mood-anchor-en-manifest-20260705.webmanifest",
  "mood-anchor-icon.svg"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match("mood-anchor-en-20260705.html")))
  );
});
