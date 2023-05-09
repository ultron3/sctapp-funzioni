//funzione geolocalizzazione
function mostraPosizione(lat, long) {
    // crea un oggetto di opzioni per l'API di geolocalizzazione
    var options = {
      enableHighAccuracy: true, // attiva l'alta precisione
      timeout: 5000, // imposta un timeout di 5 secondi
      maximumAge: 0 // disabilita la cache della posizione
    };
  
    // richiede la posizione all'API di geolocalizzazione
    navigator.geolocation.getCurrentPosition(function(posizione) {
      // ottieni le coordinate della posizione attuale
      var latitudine = posizione.coords.latitude;
      var longitudine = posizione.coords.longitude;
      
      // mostra le coordinate della posizione attuale
      console.log("La tua posizione attuale è: " + latitudine + ", " + longitudine);
      
      // calcola la distanza dalla posizione specificata
      var distanza = calcolaDistanza(lat, long, latitudine, longitudine);
      
      // mostra la distanza dalla posizione specificata
      console.log("La distanza dalla posizione specificata è: " + distanza + " metri");
    }, function(errore) {
      // gestisce gli errori di geolocalizzazione
      switch(errore.code) {
        case errore.PERMISSION_DENIED:
          console.log("Permesso di geolocalizzazione negato.");
          break;
        case errore.POSITION_UNAVAILABLE:
          console.log("Posizione non disponibile.");
          break;
        case errore.TIMEOUT:
          console.log("Timeout scaduto.");
          break;
        default:
          console.log("Errore sconosciuto.");
          break;
      }
    }, options);
  }
  //da ricontrollare qualcosa non va
  function calcolaDistanza(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // raggio della Terra in metri
    var phi1 = lat1 * Math.PI / 180; // latitudine della prima posizione in radianti
    var phi2 = lat2 * Math.PI / 180; // latitudine della seconda posizione in radianti
    var delta_phi = (lat2 - lat1) * Math.PI / 180; // differenza di latitudine in radianti
    var delta_lambda = (lon2 - lon1) * Math.PI / 180; // differenza di longitudine in radianti
    
    var a = Math.sin(delta_phi/2) * Math.sin(delta_phi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(delta_lambda/2) * Math.sin(delta_lambda/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c; // distanza in metri
    
    return d;
  }