
 var filesToCache = [
 '/',
 '/index.html',
 '/style.css',
 '/favicon.ico',
 '/js/core.js'
 ]; 
// Installazione del Service Worker
self.addEventListener('install', function(event) {
    event.install()
    console.log('Il Service Worker è stato installato.');
  });
  
  // Attivazione del Service Worker
  self.addEventListener('activate', function(event) {
    event.activate()
    console.log('Il Service Worker è stato attivato.');
  });
  
  // Gestione delle richieste
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  });


 //creo la cartella js per creare il file core.js