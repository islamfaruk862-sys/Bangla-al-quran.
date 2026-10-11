const CACHE='quran-bangla-shell-v1';
const SHELL=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(u.origin===location.origin && e.request.method==='GET'){
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
   if(r.ok){const copy=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy));}
   return r;
  })));
 }
});