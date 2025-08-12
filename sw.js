const CACHE_NAME = 'femmedress-final-v1';
const ASSETS = [
  '.',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/sw.js',
  '/catalog.json',
  '/checkout.html',
  '/admin.html',
  '/thankyou.html'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(resp=>{ return resp || fetch(e.request).then(fetchResp=>{ caches.open(CACHE_NAME).then(c=>{ try{ c.put(e.request, fetchResp.clone()); }catch(e){} }); return fetchResp; }).catch(()=>{ if(e.request.mode==='navigate') return caches.match('/index.html'); }); }));
});
