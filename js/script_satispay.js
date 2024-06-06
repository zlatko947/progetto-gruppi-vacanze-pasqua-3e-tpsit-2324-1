window.addEventListener("load", function() {
  this.setInterval(infiniteCifre, 1500);
  this.setInterval(infiniteDecine, 15000);
  this.setInterval(infiniteCentinaia, 150000);
});

function infiniteCifre(){
  const first = document.getElementById("primo");
  if(first.innerText == "9"){
    first.innerText = "0";
  }
  else{
    first.innerText = (parseInt(first.innerText)+1).toString();
  }
}

function infiniteDecine(){
  const second = document.getElementById("decine");
  if(second.innerText == "9"){
    second.innerText = "0";
  }
  else{
    second.innerText = (parseInt(second.innerText)+1).toString();
  }
}

function infiniteCentinaia(){
  const thrid = document.getElementById("centinaia");
  if(thrid.innerText == "9"){
    thrid.innerText = "0";
  }
  else{
    thrid.innerText = (parseInt(thrid.innerText)+1).toString();
  }
}