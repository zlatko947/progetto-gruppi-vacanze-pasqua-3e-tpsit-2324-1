window.addEventListener("load", function() {
  const submitButton1 = document.getElementById("submitButton1");
  submitButton1.disabled = true;

  const name = document.getElementById("name");
  const phoneNumber = document.getElementById("phoneNumber");
  const emailAddress = document.getElementById("emailAddress");
  const pw = document.getElementById("pw");


  name.addEventListener("input", sbloccaSubmit);
  phoneNumber.addEventListener("input", sbloccaSubmit);
  emailAddress.addEventListener("input", sbloccaSubmit);
  pw.addEventListener("input", sbloccaSubmit);
  
 
  
});

function sbloccaSubmit(){
  const name = document.getElementById("name");
  const phoneNumber = document.getElementById("phoneNumber");
  const emailAddress = document.getElementById("emailAddress");
  const pw = document.getElementById("pw");

  var cont;

  cont=0;
  
  var nome = name.value;
  if (nome !=0 && nome != ""){
    cont+=1;
  }

  var numero = phoneNumber.value;
  if (numero !=0 && numero != ""){
    cont+=1;
  }

  var email = emailAddress.value;
  if (email !=0 && email != ""){
    cont+=1;
  }

  var password = pw.value;
  if (password !=0 && password != ""){
    cont+=1;
  }

  if(cont==4){
    submitButton1.disabled = false;
    
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", revokeSubmit);

    const btnOk = document.getElementById("btn-ok");
    btnOk.addEventListener("click", redirectIndex);

    const btnClose = document.getElementById("btn-close");
    btnClose.addEventListener("click", redirectIndex);
  }
    
}

function redirectIndex(){
  window.location.href = "home.html";
}

function revokeSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
}