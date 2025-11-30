'use client';
import React, {useState} from "react";


export function BotonLuz() {
    // inicializacion del estado
    const [isOn, setIsOn] = useState(true);  // true encendido.

    // manejo del click
    const handleToogle = () => {
        // operador ! negacion
        setIsOn(!isOn); 
    };

    return (

        <button onClick={handleToogle}>
            {/*texto dinámico basado en el estado*/}
            {isOn ? "Encendido":"Apagado"}
        </button>
    );
} 

