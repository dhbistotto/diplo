'use client';
import React, {useState} from "react";

// Componente de cliente: Necesita interaccion y estado //
export function Contador(){
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1); // Actualiza el estado (exclusivo del cliente)
    };

    return (
        <div>
            <p>Has hecho click {contador} veces. </p>
                {/*Manejo de eventos del lado del cliente*/}
            <button onClick={handleClick}>
                Incrementar
            </button>    
        </div>
        );
}


