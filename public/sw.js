self.addEventListener("install", function (event) {
  event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener("activate", function (event) {
  // This will be called only once when the service worker is activated.
  console.log("Registerd Serviceworker");
  event.waitUntil(self.clients.claim()); // Become available to all pages
});

self.addEventListener("push", () => {
  self.registration.showNotification("Hello world!");
});
