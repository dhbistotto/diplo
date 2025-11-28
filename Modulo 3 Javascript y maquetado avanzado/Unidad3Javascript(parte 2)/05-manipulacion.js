//style

const titulo = document.querySelector(`h1`);
console.log(titulo);

titulo.style.color = "red" //se puede usar backgroundColor y fontsize

//classlist

titulo.classList.add(`fondo`);


const boton = document.getElementById(`boton`);
const texto = document.getElementById(`texto`);

boton.addEventListener(`click`,()=> {
    texto.classList.toggle(`invisible`)

})

//  METODOS DE classList

//.add:       Agrega Clase.
//.remove:    Elimina clase.
//.toggle:    Alterna la prescencia de una clase.
//.replace:   Reemplaza una clase por otra.
//.lenght:    Devuelve el numero de clase en el elemento.

const aclaracion = document.getElementById(`aclaracion`);
console.log(aclaracion)

aclaracion.innerHTML = "<h1>Hola a todos</h1>"
aclaracion.innerText = "Hola aaaaaa todos";







