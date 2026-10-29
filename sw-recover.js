// Auto-recover from a poisoned Service Worker cache. If the app shell was
// served stale, its hashed /assets entry chunk 404s and nothing mounts
// (blank screen). Catch that, drop all SW registrations + caches, reload
// once (sessionStorage guard prevents a reload loop).
// Loaded as a classic, non-deferred script from index.html (not inline) so the
// CSP can drop script-src 'unsafe-inline'.
window.addEventListener('error', function (e) {
  var el = e && e.target;
  if (!el || el.tagName !== 'SCRIPT' || !el.src || el.src.indexOf('/assets/') === -1) return;
  if (sessionStorage.getItem('parceliq-sw-recover') === '1') return;
  sessionStorage.setItem('parceliq-sw-recover', '1');
  var done = function () { location.reload(); };
  Promise.resolve()
    .then(function () {
      return navigator.serviceWorker
        ? navigator.serviceWorker.getRegistrations().then(function (rs) {
            return Promise.all(rs.map(function (r) { return r.unregister(); }));
          })
        : null;
    })
    .then(function () {
      return window.caches
        ? caches.keys().then(function (ks) {
            return Promise.all(ks.map(function (k) { return caches.delete(k); }));
          })
        : null;
    })
    .then(done, done);
}, true);
// Clear the guard once the app has successfully booted.
window.addEventListener('load', function () {
  setTimeout(function () { sessionStorage.removeItem('parceliq-sw-recover'); }, 4000);
});
