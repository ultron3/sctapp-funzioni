# INIZIO NUOVO PROGETTO

# Salute con te 2.0

Una Progressive Web App o PWA (termine coniato da Google) è un sito web che utilizza moderne tecnologie Web per offrire agli utenti un’esperienza mobile migliore rispetto ad un’app nativa iOS o Android.

Le PWA sono essenzialmente delle applicazioni ibride, cioè sono una via di mezzo tra un sito web e un’applicazione per device mobile.

Per inizalizzare una pwa bisogna creare un file nominandolo manifest.json.

Nel file manifest.json, l'attributo display l'ho impostato su fullscreen.

Fullscreen: l'applicazione viene visualizzata a tutto schermo e nasconde la barra degli indirizzi 
e la barra di navigazione del browser.



Prima di questo nella cartella d questo progetto ho lanciato il comando npm init, poi ho installato le dipendenza che mi servono.

le dipendenze sono le seguenti:

    "@angular/cli": "^16.0.0",
    "@azure/cognitiveservices-face": "^5.0.0",
    "@azure/ms-rest-js": "^2.6.6",
    "android": "^0.0.8",
    "angular": "^1.8.3",
    "face-api.js": "^0.22.2",
    "ios": "^0.0.1",
    "pg": "^8.10.0",
    "pwa": "^1.9.7",
    "uuid": "^9.0.0",
    "web-bluetooth-utils": "^1.1.1"
   




# ANNOTAZIONI FACE ID
se hai bisogno di utilizzare il Face ID in una pwa, puoi considerare l'utilizzo di tecnologie come WebAuthn (Web Authentication) 
o FIDO2 (Fast Identity Online) che consentono l'accesso tramite 
l'autenticazione biometrica (come il Face ID) 
o l'uso di dispositivi di sicurezza come chiavi USB.
 Queste tecnologie sono supportate da diversi browser web moderni.

Per utilizzare queste tecnologie, dovresti creare un backend sicuro per gestire l'autenticazione 
e la registrazione degli utenti e quindi utilizzare JavaScript per interagire con le API del backend. 
Ci sono diverse librerie e framework disponibili per semplificare l'implementazione di WebAuthn o FIDO2.