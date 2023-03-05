function nie() {
  alert("Nie ma pracy dla ludzi z moim wykształceniem.");
}

function tak() {
  // var x = document.getElementById("nie");
  var huj = Math.floor(Math.random() * 80 + 10);
  var cipa = Math.floor(Math.random() * 80 + 10);
  document.getElementById("tak").style.left = huj + "%";
  document.getElementById("tak").style.top = cipa + "%";
}
