const CACHE_NAME = 'univesp-calc-v4'; 
const ASSETS = [
  '/',
  '/index.html',
  '/progresso.html',
  '/mediafinal.html',
  '/exame.html',
  '/porcentagemsemanas.html',
  '/projetointegrador.html',
  '/metas.html',  
  '/dicas.html',       
  '/style.css',
  '/lucide.js',  
  '/Univesplogo.webp',
  '/avanota.webp',
  '/seinota.png',
  '/cadasemana.webp', 
  '/manifest.json'
];


self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ativação: Limpa caches antigos se mudar a versão
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// Intercepta pedidos: Serve o arquivo do cache se estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});