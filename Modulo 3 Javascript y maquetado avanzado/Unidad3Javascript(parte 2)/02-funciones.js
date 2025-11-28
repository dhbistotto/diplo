function desc(precio,descuento){
    const eldesc = (precio * descuento)/100;
    return precio - eldesc;
}

const precioventa = 1000;
const descuentohoy = 10;

console.log(desc(precioventa,descuentohoy));
console.log(`El descuento es ${descuentohoy}`); 
console.log(`El precio es de ${precioventa}`);