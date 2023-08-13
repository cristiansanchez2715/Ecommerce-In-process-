import { useState } from "react"
import imageCarrito from './assets/Carrito-removebg-preview.png'

export default  function Carrito(){

    
var [compraUsuario, setCompraUsuario] = useState(0)
var[articulosUsuario, setArticulosUsuario] = useState(0)

  

    return(

<div className="car-container">
    <div>
            <h2>Carrito De Compras</h2>
            </div><div className="articles-car">
            <h3>Articulos :{articulosUsuario} <br></br>  </h3>
            
            <br></br>
            <h3> Total : {compraUsuario}$ <br></br> </h3>
           
           <button className="btn-detaills" onClick={
            () => {
                const myOrder = document.querySelector('.my-order-container')
                myOrder.classList.toggle('active')
            }
           }><img src={imageCarrito} className="img-btn-car" /></button>
            </div>
        </div>


    )
}