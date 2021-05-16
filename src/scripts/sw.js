// const version = "1.0.0";
// const CACHE_NAME = `myPwa-${version}`;
// const assetsToCache = ["/", "/index.html", "/manifest.json", "/main.js"];

self.addEventListener("install", (event) => {
  console.log("installing service worked", event);
  // self.skipWaiting();
  // event.waitUntil(
  //   caches.open(CACHE_NAME).then((cache) => cache.addAll(assetsToCache))
  // );
});

self.addEventListener("activate", (event) => {
  console.log("activate service worked", event);
  // event.waitUntil(
  //   caches
  //     .keys()
  //     .then((cacheNames) =>
  //       Promise.all(
  //         cacheNames
  //           .filter((name) => name !== CACHE_NAME)
  //           .map((filteredName) => caches.delete(filteredName))
  //       )
  //     )
  // );
});

self.addEventListener("fetch", (event) => {
  console.log(event.request);
  event.respondWith(fetch(event.request));
});
