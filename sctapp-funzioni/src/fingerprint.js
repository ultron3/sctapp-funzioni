function authenticateWithFingerprint() {
    // Controlla se il browser supporta l'API WebAuthn
    if (window.PublicKeyCredential) {
  
      // Richiede l'autorizzazione per l'utilizzo dell'impronta digitale
      navigator.credentials.get({ publicKey: { userVerification: 'required' } }).then(function (credential) {
        // Autenticazione riuscita
        console.log('Utente autenticato con successo');
      }).catch(function (credential) {
        // Autenticazione fallita o l'utente ha negato l'autorizzazione
        console.error("autenticazione fallita");
      });
  
    } else {
      // Il browser non supporta l'API WebAuthn
      console.error('Il tuo browser non supporta l\'autenticazione tramite impronta digitale.');
    }
  }