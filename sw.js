// The files we want to cache
var CACHE_NAME = 'article-24';
var baseUrl = '/static/js/';
var urlsToCache = [
  baseUrl + 'xxt.ui.error.js',
  baseUrl + 'angular.min.js',
  '/bundles/default/site/fe/matter/article/main.js',
  '/ServiceWork.github.io/js/bb.js',
//   '/rest/site/fe/matter?site=57dc4f6c25eca6c77cef54bc65c0d61b&id=4975&type=article'
];

// Set the callback for the install step
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            // console.log('addcach');
            // return cache.addAll(urlsToCache);
            cache.addAll(urlsToCache).then(function () {
                console.log('addcach');
            });
        }),
        self.skipWaiting()
        // 清理旧版本 
        // caches.keys().then(function (cacheList) { 
        //     return Promise.all( 
        //         cacheList.map(function (cacheName) { 
        //             if (cacheName !== 'two') { 
        //                 console.log('清理',cacheName); 
        //                 return caches.delete(cacheName); 
        //             } 
        //         }) 
        //     ); 
        // })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        Promise.all([
            // 更新客户端
            self.clients.claim(),
            // 清理旧版本
            caches.keys().then(function (cacheList) {
                return Promise.all(
                    cacheList.map(function (cacheName) {
                        if (cacheName !== CACHE_NAME) {
                            console.log('更新');
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

self.addEventListener('fetch', function (event) {
    // console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
                // Cache hit - return response
            if (response) {
                console.log('有', event.request.url);
                return response;
            } else {
                console.log('没有', event.request.url);
                return fetch(event.request);
            }
            
            // var fetchRequest = event.request.clone();
            
            // return fetch(fetchRequest).then(
            //     function (response) {
            //         console.log('没有22222', event.request.url);
            //         // Check if we received a valid response
            //         console.log(response.type);
            //         if (!response || response.status !== 200 || response.type !== 'basic') {
            //             return response;
            //         }

            //         // IMPORTANT: Clone the response. A response is a stream
            //         // and because we want the browser to consume the response
            //         // as well as the cache consuming the response, we need
            //         // to clone it so we have 2 stream.
            //         var responseToCache = response.clone();

            //         caches.open(CACHE_NAME)
            //             .then(function (cache) {
            //                 cache.put(event.request, responseToCache);
            //             });

            //         return response;
            //     }
            // );
        })
    );
    
});

