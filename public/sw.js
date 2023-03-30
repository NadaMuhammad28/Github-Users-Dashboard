//cache name for static file
const staticCacheName = "site_cache-v7";
const DynamicCacheName = "dynamic_cache_v4";
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

  //for production
  "/assets/index.js",
  "/assets/index.css",
];

// '/' --> the root url
//first install
// self.addEventListener("install", (ev) => {
//   // console.log("sw has been installed")

//   //The ExtendableEvent.waitUntil() method tells the event dispatcher that work is ongoing.
//   //It can also be used to detect whether that work was successful. In service workers,
//   // waitUntil() tells the browser that work is ongoing until the promise settles,
//   //and it shouldn't terminate the service worker if it wants that work to complete.
//   ev.waitUntil(
//     caches
//       .open(staticCacheName)
//       .then((cache) => cache.addAll(assets))

//       .catch((e) => console.log(e))
//   );
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

self.addEventListener("install", async (ev) => {
  try {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(assets);
  } catch (e) {
    console.log(e);
  }

  ev.waitUntil(Promise.resolve());
});
/////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    //wait untills--> expects one promis to be resolved
    //promise.all-> arry of promises , returns a ptomise when all promises are resolved
    //return array of cache keys
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== staticCacheName)
            .map((key) => caches.delete(key))
        );
        //           return window.location.reload()
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

////////////////////
// self.addEventListener("activate", async (ev) => {
//   const keys = await caches.keys();
//   await Promise.all(
//     keys
//       .filter((key) => key !== staticCacheName)
//       .map((key) => caches.delete(key))
//   );
//   // await self.clients.claim();
//   return ev.waitUntil(Promise.resolve());

//   // ev.waitUntil(Promise.resolve());
// });

//wait untills--> expects one promis to be resolved
//promise.all-> arry of promises , returns a ptomise when all promises are resolved
//return array of cache keys

/////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("fetch", (ev) => {
  // console.log("fetch", ev);
  ev.respondWith(
    caches.match(ev.request).then((resp) => {
      const url = new URL(ev.request.url);
      if (resp) return resp;

      if (url.origin === origin) {
        return fetch(ev.request);
      } else {
        // let url = new URL(ev.request.url);
        // console.log(url.origin == origin);

        return fetch(ev.request);
        then((resp) => {
          return caches
            .open(DynamicCacheName)
            .then((cache) => cache.put(url, resp.clone()))
            .catch((e) => console.log(e));
        });
      }
    })
  );
});
