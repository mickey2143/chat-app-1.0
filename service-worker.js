// self.addEventListener("install", (eve) => {
//   eve.waitUntil(
//     caches.open("chat-v1").then((cache) => {
//       return cache.addAll(["/index.bb"]);
//     })
//   );
// });

// self.addEventListener("fetch", (eve) => {
//   eve.respondWith(
//     caches.match(eve.request).then((networkResponse) => {
//       return caches.open("chat-v1").then((cache) => {
//         cache.put(eve.request, networkResponse.clone());
//         return networkResponse;
//       });
//     })
//   );
// });
