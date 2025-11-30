import { BotonLuz } from "@/componentes/apagarencender";
import { Contador } from "@/componentes/contador";
import { Tituloprincipal } from "@/componentes/tituloprincipal";
const titulo2 = "Hola Dos";

import { ListaProductos } from "@/componentes/listaSuper";
const productos = [
  { id:1, nombre: 'Bananas', precio: 3000},
  { id:2, nombre: 'Manzana', precio: 2000},
  { id:3, nombre: 'Peras', precio: 12000},
];
import { Novedaditems } from "@/componentes/novedaditems";
const contenidoNovedad = {
  id: 1,
  titulo: "Next lanza componentes",
  subtitulo: "La version 15 introduce",
  autor: "Flavia",
  cuerpo: "la version de next incormpora nuevos componentes para facilitar la vida"
};
import Ejemplousestate from "@/componentes/ejemplousestate";

export default function Home() {
  return (
    <div>
     <h2>Ejemplos de Props</h2>
      {/* Componenete simple que ademas podemos reutilizar */}
        <Tituloprincipal titulo="Hola Curso"/>
        <Tituloprincipal titulo= {titulo2}/>
        <hr/>
      {/* Componenete para listar un array */}        
        <ListaProductos items={productos}/>
        <hr/>
      {/* Multiples propiedades + destructuring */}            
        <Novedaditems 
        title ={contenidoNovedad.titulo}
        subtitle ={contenidoNovedad.subtitulo} 
        author ={contenidoNovedad.autor} 
        body ={contenidoNovedad.cuerpo}        
        />
        <hr/>
        <h2>Estados</h2>
      <Contador/>
      <hr/>
      <BotonLuz/>
      <hr/>
      <hr/>
      <hr/>      
      <Ejemplousestate/>      

    </div>
  );
}
