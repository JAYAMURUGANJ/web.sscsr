'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "dfcd4a812209e66f0ee547846feb9213",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "df810d168ed50cadffe002dcfe83c4ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a918dbf530b62be58499aa7fb027e899",
".git/logs/refs/heads/main": "bae1fcc30842b4ff56126fd21d210fcb",
".git/logs/refs/remotes/origin/main": "6fec80bcb4d999340d472f81735e80a1",
".git/objects/09/ee172cdba84f8b69660fe2fed75854d8528fdd": "75c3432442a235abeddaa8b8c6af7bc5",
".git/objects/0e/f6ed1693b3c3548845621686271bd47f593d8b": "f5000f3c193a25d1a2d360a0266664d3",
".git/objects/12/0660224e60e7af84283ad71a874a37d40330ef": "161018c84001fb6f6d2c1cf8d86b4163",
".git/objects/1c/32586381e8ca3272aab7f3bdf772a7cf06fb93": "27605cf6cedb46324120913d8dba089c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d0108b82e060df9cd68b78d5a89165dfbaf0fc": "4dadd289d6d4bda3184f4915b1328fb3",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/28/b0adb8ccf4cdcd9e3233d56a2dfcb3c88c48f2": "e5f6b44e159e89f048548a0514f55cd3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/8fece9b284715de37cc16ed379da28b2eca466": "b26aa34287fcfbbe111c4a085f5e7e3d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/f94bab1440f5445c3aba932b3a73e68f0df947": "4db542336f18d546911ddfa4155b7fa1",
".git/objects/5c/2d68ac97d4fc122723a88805277952205b2d0a": "04421ddcb7ff12c987beb118613303fc",
".git/objects/60/46b4db8a9799d917a7cda8d053674fd66c7bf5": "a11f48294f4ee774f422b580d711aee3",
".git/objects/6d/fdf6807c93f5f893b5107e5f609ecd6b93d1c3": "2d58efbb542505074c9251c6596860bf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/8b1eb08c8deecb74e7ef6cfde608731ea21793": "5e958fc22f3e817004a76672f5a954bb",
".git/objects/7c/f82d7df9c26740ddaa159ca2eb9ab926e0e646": "be92297cc0bd407003ef1d8c19032208",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/3b5b34e8ed75efb49b62e0da4d6dd9d3b07060": "8dfc570f063a14f472078c3b1d92eb06",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/9435ecebb6f89e140d3ec7c0918733168a6a81": "dac2eed4f1c021a6bf1bd5a910d70c26",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/4b2256178b6b4566f5e8789cc86009642424ec": "72085cf913fa535b53e4c0c62191f502",
".git/objects/b3/32bc63114bd294aa377e033afbde0037b2b752": "9fad96fee262ff68d76aa5fa444d2c68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/517a833b17bc6ff36c717c97d903acebbba684": "1b2a3eb81d398fe932e8cac3870a3657",
".git/objects/c8/f88071b59e5190278b5229b4de8c8d56a2f87e": "8633a892b5a9d23f5328d87b5fd15d39",
".git/objects/ce/09460303d4cb1e026dabe261beb049f460814c": "3794cd6e5d44aae93cd781885c1485ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/95f851f5e700c80fb890dd830ceb3e2fcf58b2": "436f1e50682adf09d7d7a7af79645b5b",
".git/objects/ea/259723d42ffd5dd7c44c82284cf7dc1737f273": "bf6de8b5a938b96430dfb4d9e3beb2c5",
".git/objects/f7/8b4c00e884d9334f5f67cdd8ef775d949873f5": "5a2d470bedf5a7623ee4276ef9384dba",
".git/refs/heads/main": "70c196c8fb27f944921dcfece0761b6b",
".git/refs/remotes/origin/main": "70c196c8fb27f944921dcfece0761b6b",
"assets/AssetManifest.json": "d4d5079179a8c62a4f4a6a9b83ca1706",
"assets/assets/img/admin.png": "86e2e5bc4fca78f1a12895075c5cb81a",
"assets/assets/img/admitcard.png": "8e9903870e5ba9fcb35db8b97aef0e77",
"assets/assets/img/answerkey.png": "ade3927afdf4e217738fe85a0def5924",
"assets/assets/img/indian_emblem.png": "33a76d48bc493f4f3a98dda23ff0bbdf",
"assets/assets/img/indian_emblem.svg": "d881dce8630cf51f46e7b87c40d31c08",
"assets/assets/img/logo-temp.png": "7cafd929e458cb6bb6189b72c5670b15",
"assets/assets/img/logo.png": "b8070ac2fe7ff94a98fe0f8952fbb3f5",
"assets/assets/img/result.png": "10274216250e251b1f943d3bc320f0ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b120c8088c9af861f92ce28ea6275101",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2efdb56e9f16809fe0f048a5c417fe65",
"/": "2efdb56e9f16809fe0f048a5c417fe65",
"main.dart.js": "9dd75a25c7fc1d08346c67ea0e3ee3da",
"manifest.json": "8a8d1e5eacf294b4b8cb66ca0e5e912e",
"version.json": "6242217a3acf90d0c2ac71e5f2fb4d52"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
