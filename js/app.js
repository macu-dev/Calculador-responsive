let btn = document.querySelectorAll('.val');
let nuevoArray = Array.from(btn);
console.log(nuevoArray);


nuevoArray.forEach(element => {
  element.onclick = handler;
});

console.log(nuevoArray);


function handler(e) {
  let target = e.target.innerText;
  let cuenta = document.querySelector('#cuenta');
  
  if(cuenta.innerHTML.length <= 20){
    cuenta.innerHTML += target;
  }
  if(cuenta.innerHTML.length > 15 && cuenta.innerHTML.length <=20){
    cuenta.style.fontSize = '16px';
  }

   console.log(resultado);
}

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
