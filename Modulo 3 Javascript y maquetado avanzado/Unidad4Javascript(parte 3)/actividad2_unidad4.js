productos = [{nombre: 'libro', precio: 10}, {nombre: 'lapiz', precio: 2}];
const encuentra1 = productos.map(p => p.nombre)

console.log(encuentra1);


usuarios = [{id: 1, nombre: 'Ana'}, {id: 2, nombre: 'Luis'}];
const encuentra2 = usuarios.find(u => u.id === 2);
console.log(encuentra2);