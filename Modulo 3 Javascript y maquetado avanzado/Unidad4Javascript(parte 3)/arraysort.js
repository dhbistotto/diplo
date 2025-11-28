/*
const arregl_o = [23,4,5423,2,3334,456,6];
arregl_o.sort((a,b) => a - b);
console.log(arregl_o);
*/

/*
const numero = [33,23,3,2,232,433,22,9];
const orden = numero.sort((a,b)=> b - a);
console.log(orden);
*/

const equipos = [
    {nombre: "raaaaaa", puntos: 22 },
    {nombre: "eaaaaaa", puntos: 2 },
    {nombre: "aaaaaaa", puntos: 222 },
    {nombre: "taaaaaa", puntos: 12 },
    {nombre: "gaaaaaa", puntos: 5 },
    {nombre: "haaaaaa", puntos: 23 }
];


equipos.sort((a,b) => {
    if(a.puntos > b.puntos) { return 1;}
    if(a.puntos < b.puntos) { return -1;}
    if(a.puntos === b.puntos) { return 0;}
}) ;

console.log(equipos);