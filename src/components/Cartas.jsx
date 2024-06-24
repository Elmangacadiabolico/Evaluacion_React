import React, { useEffect, useState } from 'react'


function Cartas() {
    const [elements,setElement] = useState([])

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setElement(json))
  
}, []);

  return (
<div className='contenedor'>
      
      {elements.map(element => (
        <div key={element.id}>
          <h5>{element.title}</h5>
          <img className='Imagenes' src={element.image} alt="" />
        </div>
      ))}
    </div>
  );
  } 

export default Cartas