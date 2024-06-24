import React, { useState } from 'react';
import Cartas from './Cartas';

function Navbar({element,}) {

const Datos = Cartas([element])

/* DEJAS ON CONST PARA LOS BOTONES  */
const [contador, setContador] = useState(0);
const agregarElemento = () => {
    if (contador < 100) {
        setContador(contador + 1);
       
    }
};

const quitarElemento = () => {
    if (contador > 0) {
    setContador(contador - 1);
    }
};

return (
    <div className='Fondo_Navbar'>
    <button className='Botones' onClick={agregarElemento}> 
        Agregar Elemento 
    </button>
    <button className='Botones' onClick={quitarElemento}> 
        Quitar Elemento 
    </button>
    <div>
        <p className='Cantidad_elementos'>Contador: {contador}</p>
    </div>
    </div>
  );
}

export default Navbar;
