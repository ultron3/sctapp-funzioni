//funzione notifiche

function sendMessage() {
    // Otteniamo il valore del messaggio dall'elemento di input
    var message = document.getElementById("message").value;
    
    // Controlliamo se il messaggio non è vuoto
    if (message.trim() === "") {
      alert("Il messaggio non può essere vuoto");
      return;
    }
  
    // Inviamo il messaggio al server
    
  
    // Visualizziamo una notifica
    showNotification("Hai una nuova notifica da salute con te", message);
  
    // Puliamo il campo di input
    document.getElementById("message").value = "";
  }
  
  function showNotification(title, body, icon) {
    if (!("Notification" in window)) {
      var icon ="faviconsct.ico"
      alert("Le notifiche del browser non sono supportate");
      return;
    }
  
    if (Notification.permission === "granted") {
      var notification = new Notification(title, {
        body: body,
        icon: icon,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(title, {
            body: body,
            icon: icon,
          });
        }
      });
    }
  }
  