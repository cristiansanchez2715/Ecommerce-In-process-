import React from 'react'
import logo from './logo.svg';
import Carrito from './Carrito'


function BarNav() {
  return (
    <div className='barNav'><p>
        <React.Fragment>
        <Carrito />
        </React.Fragment>
           <div className='container-logo-car'></div>
<img src={logo} className="App-logo" alt="logo" />
  
        </p></div>
  )
}

export default BarNav