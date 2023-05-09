

function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            // Visualizza lo stream video sul tag video
            video.srcObject = stream;
            // Avvia la riproduzione del video
            video.play();
            // Salva lo stream nella variabile globale
            window.stream = stream;
            console.log("apertura camera")
        })
        .catch(function (error) {
            console.log('Si è verificato un errore: ' + error.message);
        });
}

function closeCamera() {
    // Interrompi lo stream video
    if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
            track.stop();
        });
    }
    // Interrompi la riproduzione del video
    video.pause();
    // Resetta il tag video
    video.src = "";
    console.log("chiusura camera")
}