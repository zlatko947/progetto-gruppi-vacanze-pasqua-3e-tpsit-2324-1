window.addEventListener("load", function() {
  
  const submitButton2 = document.getElementById("submitButton2");

    submitButton2.disabled = true;

  const nomeUtente = document.getElementById("nomeUtente");
  const addressEmail = document.getElementById("addressEmail");
  const password = document.getElementById("password");


  nomeUtente.addEventListener("input", sblocca);
  addressEmail.addEventListener("input", sblocca);
  password.addEventListener("input", sblocca);



});

function sblocca() {
  const nomeUtente = document.getElementById("nomeUtente");
  const addressEmail = document.getElementById("addressEmail");
  const password = document.getElementById("password");

  var contatore;

  contatore = 0;

  var nome = nomeUtente.value;
  if (nome != 0 && nome != "") {
    contatore += 1;
  }

  var email = addressEmail.value;
  if (email != 0 && email != "") {
    contatore += 1;
  }

  var Pw = password.value;
  if (Pw != 0 && Pw != "") {
    contatore += 1;
  }

  if (contatore == 3) {
    
   submitButton2.disabled = false;

    const form = document.getElementById("registration-form");
    form.addEventListener("submit", revokeSubmit);

    const btnOk = document.getElementById("btn-ok");
    btnOk.addEventListener("click", redirectIndex);

    const btnClose = document.getElementById("btn-close");
    btnClose.addEventListener("click", redirectIndex);
  }

}

function redirectIndex() {
  window.location.href = "home.html";
}

function revokeSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
}