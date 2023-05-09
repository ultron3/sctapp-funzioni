function startRecognition() {
    const recognition = new window.webkitSpeechRecognition(); // crea un nuovo oggetto di riconoscimento vocale
  
    // imposta la lingua di riconoscimento vocale
    //imposto due lingue italiano e inglese
  
    recognition.lang = 'it-IT';
  
  
    recognition.onstart = () => {
      console.log('Inizia a parlare'); // stampa in console del browser un messaggio di avvio del riconoscimento vocale
    };
  
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript; // ottiene il testo  dal riconoscimento vocale
      console.log('Hai detto: ', result); // stampa il testo 
    };
  
    recognition.onerror = (event) => {
      console.error('Errore di riconoscimento vocale', event.error); // stampa un messaggio di errore in caso di problemi con il riconoscimento vocale
    };
  
    recognition.onend = () => {
      console.log('Riconoscimento vocale terminato');
      
  
    };
  
    recognition.start();
  }
  
  // FARE MOLTA ATTENZIONE ALL'INTONAZIONE DELLA VOCE
  
  // OVVIAMENTE E' DA PRECISARE