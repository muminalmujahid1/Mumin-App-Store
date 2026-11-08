
const CACHE = "mumin-app-store-v3";

const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/mumin-app-store-logo.jpg",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(async cache => {
      await Promise.all(
        FILES.map(async file => {
          try {
            await cache.add(file);
          } catch (error) {
            console.warn("Cache skipped:", file, error);
          }
        })
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
