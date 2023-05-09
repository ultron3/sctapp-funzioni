// Richiedi l'autorizzazione per utilizzare il Bluetooth
navigator.bluetooth.requestDevice({
  filters: [{
    services: ("<Inserire qui l'ID del servizio Bluetooth:")
  }]
})
.then(device => {
  // Connetti al dispositivo Bluetooth
  return device.gatt.connect();
})
.then(server => {
  // Ottieni il servizio Bluetooth
  return server.getPrimaryService("Inserire qui l'ID del servizio Bluetooth:")
})
.then(service => {
  // Ottieni la caratteristica Bluetooth
  return service.getCharacteristic("Inserire qui l'ID della caratteristica Bluetooth: ")
})
.then(characteristic => {
  // Leggi i dati dalla caratteristica Bluetooth
  return characteristic.readValue();
})
.then(value => {
  // Elabora i dati letti
  console.log('Dati letti dal dispositivo Bluetooth:', value);
})
.catch(error => {
  console.error('Errore durante la connessione al dispositivo Bluetooth:', error);
});