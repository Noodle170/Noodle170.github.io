function parzysta_zad() {
  var x = parseInt(document.getElementById("parzysta").value);
  if (x % 2 == 0) {
    document.getElementById("wynik1").innerHTML =
      "Liczba " + x + " jest parzysta.";
  } else {
    document.getElementById("wynik1").innerHTML =
      "Liczba " + x + " nie jest parzysta.";
  }
  if (x == 0) {
    document.getElementById("wynik1").innerHTML = "Podałeś " + x + ".";
  }
}

function string_zad() {
  var x = document.getElementById("string").value;
  var y = document.getElementById("ile").value;
  var z = x.repeat(y);
  document.getElementById("wynik2").innerHTML = z;
}

function przeliczanie_zad() {
  var x1 = document.getElementById("c1").checked;
  var x2 = document.getElementById("c2").checked;
  var y1 = document.getElementById("f1").checked;
  var y2 = document.getElementById("f2").checked;
  var a = document.getElementById("stopien").value;

  if (x1 == true && y2 == true) {
    var z1 = a * (9 / 5) + 32;
    document.getElementById("wynik3").innerHTML = z1.toFixed(1);
  }
  if (x2 == true && y1 == true) {
    var z2 = (a - 32) * (5 / 9);
    document.getElementById("wynik3").innerHTML = z2.toFixed(1);
  }
  if (x1 == true && x2 == true) {
    document.getElementById("wynik3").innerHTML =
      "Przeliczasz Celcjusze na Celcjusze.";
  }
  if (y1 == true && y2 == true) {
    document.getElementById("wynik3").innerHTML =
      "Przeliczasz Farenheit'a na Fahrenheit'a.";
  }
}

function silnia_zad() {
  var x = parseInt(document.getElementById("silnia").value);
  var z = 1;
  for (var i = 1; i <= x; i++) {
    z *= i;
  }
  document.getElementById("wynik4").innerHTML =
    "Silnia z " + x + " wynosi: " + z;
}

function potega_zad() {
  var x = parseInt(document.getElementById("potega").value);
  document.getElementById("wynik5").innerHTML =
    x + "<sup>3</sup> = " + Math.pow(x, 3);
}
