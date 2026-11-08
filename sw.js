const CACHE="mumin-app-store-v2";
const FILES=["./","./index.html","./style.css","./app.js","./manifest.webmanifest","./assets/mumin-app-store-logo.jpg","./assets/icon-192.png","./assets/icon-512.png","./assets/apple-touch-icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).catch(()=>caches.match("./index.html"))));});
