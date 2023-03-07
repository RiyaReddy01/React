import { useState } from 'react';
import './Toggle.js';
import './Toggle.css';

function Toggle(){
    const [a, setA]= useState(0);
    
    return(
        <div>
            <button onClick={() =>{setA(a+1)}}>Count: {a}</button>
            <button onClick={() =>{alert("Toggling........")}}>Toggle</button>

        </div>
    )



}
export default Toggle;