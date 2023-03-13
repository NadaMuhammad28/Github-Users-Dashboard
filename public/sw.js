//cache name for static file
const stiaticCacheName = "site_cache-v1";
//array of static files


const assets = [
  "/",
  "/index.html",
  "github-mark.png",
  "/manifest.json",
  "/sw.js",
  "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2",
  "https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap",
  "https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2",

  // "/src/assets/avatar.png",
  // "/src/pages/Error.jsx",
  // "/src/index.css?t=1678579457290",
  // "/src/pages/Dashboard.jsx",
  // "/src/main.jsx?t=1678588179421",
  // "/src/context/GlobalContext.jsx?t=1678588179421",
  // "/src/App.jsx?t=1678588179421",
  // "/src/swDev.js",
  "/assets/index.js",
  "/assets/index.css",
];


// '/' --> the root url
//first install
self.addEventListener("install", (ev) => {
  // console.log("sw has been installed")

  //The ExtendableEvent.waitUntil() method tells the event dispatcher that work is ongoing.
  //It can also be used to detect whether that work was successful. In service workers,
  // waitUntil() tells the browser that work is ongoing until the promise settles,
  //and it shouldn't terminate the service worker if it wants that work to complete.
  ev.waitUntil(
    caches
      .open(stiaticCacheName)
      .then((cache) => cache.addAll(assets))
      .catch((e) => console.log(e))
  );
});
self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    //wait untills--> expects one promis to be resolved
    //promise.all-> arry of promises , returns a ptomise when all promises are resolved
    //return array of cache keys
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== stiaticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
console.log(self);

self.addEventListener("fetch", (ev) => {
  // console.log("fetch", ev);

  ev.respondWith(
    caches.match(ev.request).then((resp) => {
      if (resp) return resp;
      else {
        return fetch(ev.request);
      }
    })
  );
});
