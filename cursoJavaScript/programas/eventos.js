
const body = document.querySelector('body');
const container = document.querySelector('#container');
const button = document.querySelector('#enviar');
const resultadof = document.querySelector('#resultado')
/*body.addEventListener('click', function (event) {
    console.log('contenedor pulsado');
});
container.addEventListener('click', function (event) {
    console.log('body pulsado');
});*/
button.addEventListener('click', function (event) {
    const numeroUno =Number.parseInt(document.getElementById('noUno').value); 
    const numeroDos =Number.parseInt(document.getElementById('noDos').value);
    let resultado=numeroUno+numeroDos;
    resultadof.textContent = resultado;
});


