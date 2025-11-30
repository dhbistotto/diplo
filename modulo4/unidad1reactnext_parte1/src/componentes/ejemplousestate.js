"use client";
import React, {useState} from "react";

function Ejemplousestate() {
    const [count, setCount] = useState(0);

     return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Ejemplousestate;


