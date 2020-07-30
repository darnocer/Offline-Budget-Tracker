const FILES_TO_CACHE = ["/", "/index.html", "/index.js", "/icons/icon-512x512.png", "/icons/icon-192x192.png", "/db.js", "/manifest.json", "/style.css", " "]

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";


// registers service worker
self.addEventListener('install', function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });

  


  // cache responses for requests for data - opens the data cache
self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('/api')) {
        console.log('[Service Worker] Fetch (data)', event.request.url);
event.respondWith(
    caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(event.request)
        .then(response => {
            if (response.status === 200) {
                cache.put(event.request.url, response.clone());
            }
            return response;
        })
        .catch(err => {
            return cache.match(event.request);
        });
    })
);
    return;
}
event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    })
)
})