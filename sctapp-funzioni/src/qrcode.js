function generateQR() {
  document.querySelector("#qr-image").style.display = "block";
  //let Qrtext = document.querySelector("#text").value;
  let address = document.querySelector("#address").value.trim();
  /*if (Qrtext.trim().length==0){

      document.querySelector("#qr-image .error").innerHTML = "enter text";
      document.querySelector("#img").style.display = "none";
  } else {
      document.querySelector("#img").style.display = "block";
      //document.querySelector("#qr-img .error").innerHTML = "error"; 
      document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" + Qrtext;
  }*/

  if (address.length === 0) {
    document.querySelector("#qr-image .error").innerHTML = "Inserisci un indirizzo";
    document.querySelector("#img").style.display = "none";
  } else {
    document.querySelector("#img").style.display = "block";
    document.querySelector("#qr-image .error").innerHTML = "";
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(address)}`;
    document.querySelector("#img").src = qrApiUrl;
    console.log("codice qr creato")
  }
}










