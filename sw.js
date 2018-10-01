////キャッシュ名
//var CACHE_NAME = 'cache-v1';
//
////キャッシュに入れるリソースのパス
//var urlsToCache = [
//  '/manifest.json',
//  '/logo-img.png',
//  '/pwa-icon.png',
//  '/main.js',
//];
//
//
//
////インストール状態のイベント処理
//self.addEventListener('install', function (event) {
//    event.waitUntil(
//        caches.open(CACHE_NAME)
//        .then(function (cache) {
//            console.log('キャッシュに接続しました');
//            return cache.addAll(urlsToCache);
//        })
//    );
//});
//
//
//
////有効化状態のイベント処理
//self.addEventListener('activate', function (event) {
//    event.waitUntil(
//
//        //現在のキャッシュをすべて取得する
//        caches.keys().then(function (cache) {
//            //新しいキャッシュ以外は削除する
//            cache.map(function (name) {
//                if (CACHE_NAME !== name) caches.delete(name);
//            })
//        })
//
//    );
//});
//
//
//
////リクエスト取得状態のイベント処理
//self.addEventListener('fetch', function (event) {
//    event.respondWith(
//
//        //リクエストに応じたリソースがキャッシュにあればそれを使う
//        caches.match(event.request).then(function (res) {
//            if (res) return res;
//
//            return fetch(event.request);
//        })
//
//    );
//});
// ネットワークリクエスト
self.addEventListener('fetch', (event) => {

	// とりあえず何もしません

});
