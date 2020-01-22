let btn = document.querySelectorAll('.val');
let nuevoArray = Array.from(btn);

nuevoArray.forEach(element => {
  element.onclick = handler;
});

function handler(e) {
  let target = e.target.innerText;
  let cuenta = document.querySelector('#cuenta');
  
  if(cuenta.innerHTML.length <= 20){
    cuenta.innerHTML += target;
  }
  if(cuenta.innerHTML.length > 15 && cuenta.innerHTML.length <=20){
    cuenta.style.fontSize = '16px';
  }
}

window.addEventListener('keyup', function teclado (e){
  let cuenta = document.querySelector('#cuenta');

  switch(e.key) {
    case '1': case '2': case '3': case '4': case '5': case '6':
    case '7': case '8': case '9': case '0': case "-":
    case '+': case '*': case '/':   
      if(cuenta.innerHTML.length <= 20){
        cuenta.innerHTML += e.key;
      }
      if(cuenta.innerHTML.length > 15 && cuenta.innerHTML.length <=20){
        cuenta.style.fontSize = '16px';
      }
      break;
    case 'Enter':
      calcular();
    break;

    case 'Backspace':
      borratodo();
  }
});

function calcular() {
  let cuentai = document.querySelector('#cuenta');
  let resultado = document.querySelector('#resultado');
  
  let cuenta = cuentai.innerHTML;

  cuenta = cuenta.replace("➗", "/");
  cuenta = cuenta.replace("X", "*");
  cuenta = cuenta.replace("%", "/100");

  resultado.innerHTML = eval(cuenta);
}

function borrar() {
  let cuenta = document.querySelector('#cuenta');
  cuenta.innerHTML = cuenta.innerHTML.slice(0, -1);
}

function borratodo() {
  let cuenta = document.querySelector('#cuenta');
  let resultado = document.querySelector('#resultado');
  cuenta.innerHTML = "";
  resultado.innerHTML = "";
}

