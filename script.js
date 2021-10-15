var i = 0;
var start = document.getElementById("start");
var x = 0;
var increaseTime = document.getElementById("more");
var decreaseTime = document.getElementById("less");
var resetNumber = document.getElementById("reset");
var textoP = document.createTextNode("Parar");
var textoZ = document.createTextNode("Zerar");

var number = document.querySelector("div#numbers input#counter");

number.onkeyup = function test() {
  if (number.value > 999) {
    alert("Digite um número menor que 1000");
    number.value = null;
  }

  if (number.value < 0) {
    alert("Digite um número maior ou igual a 0");
    number.value = null;
  }
}

increaseTime.onclick = function up() {
  if (x == 0) {
    if (number.value < 999) {
      number.value++;
    } else {
      alert("Niet. Permitimos apenas números menores que 1000");
      number.value = null;
    }
  }
}

decreaseTime.onclick = function down() {
  if (x == 0) {
    if (number.value > 0) {
      number.value--;
    }
  }
}

start.onclick = function essecarameestressa() {
  if (x == 0) {
    var testando = setInterval(function () {
      x = 1;

      resetNumber.innerHTML = "";

      resetNumber.appendChild(textoP);

      if (i == 1) {
        resetNumber.innerHTML = "";
        resetNumber.appendChild(textoZ);
        i = 0;
        x = 0;
        clearInterval(testando);
      }

      if (number.value > 0) {
        number.value = number.value - 1;
      } else {
        number.value = null;
        x = 0;
        clearInterval(testando);
      }
    }, 500);
  }
}

resetNumber.onclick = function zerar() {
  if (x == 1) {
    i = 1;

  } else {
    number.value = null;
  }
}
