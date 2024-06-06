window.addEventListener("load", function() {
  const SignIn = document.getElementById("SignIn");
  SignIn.addEventListener("mouseover", addClassMouseOver);
  SignIn.addEventListener("mouseout", removeClassMouseOver);

  const SignUp = document.getElementById("SignUp");
  SignUp.addEventListener("mouseover", addClassMouseOverUp);
  SignUp.addEventListener("mouseout", removeClassMouseOverUp);
});


function addClassMouseOver() {
  const addClassSignIn = document.getElementById("SignIn");
  addClassSignIn.classList.remove("text-white")
  addClassSignIn.classList.add("text-blue");
  addClassSignIn.classList.add("sfumatura");
}

function removeClassMouseOver() {
  const addClassSignIn = document.getElementById("SignIn");
  addClassSignIn.classList.add("text-white");
  addClassSignIn.classList.remove("text-blue");
  addClassSignIn.classList.remove("sfumatura");
}

function addClassMouseOverUp() {
  const addClassSignUp = document.getElementById("SignUp");
  addClassSignUp.classList.add("text-white");
  addClassSignUp.classList.remove("text-blue");
  addClassSignUp.classList.add("sfumatura");
}

function removeClassMouseOverUp() {
  const addClassSignUp = document.getElementById("SignUp");
  addClassSignUp.classList.remove("text-white")
  addClassSignUp.classList.add("text-blue");
  addClassSignUp.classList.remove("sfumatura");
}