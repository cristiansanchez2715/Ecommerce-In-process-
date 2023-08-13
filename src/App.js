import './App.css';
import React, { useState, useEffect } from 'react';
import  Cards  from './Cards';
import { MyOrder } from './WIndow/MyOrder';
import BarNav from './BarNav';
import Search from './WIndow/Search';



// export let setMyOrders, myOrders;
function App() {

  const [cart, setCart] = useState([]); // Estado del carrito
  const [myOrders, setMyOrders] = useState([])



  let [api, setApi] = useState([]);
  let [selectedCardData, setSelectedCardData] = useState(null);
  

  const link = 'https://api.escuelajs.co/api/v1/products';


  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setApi(data);
         
      }).catch(err => console.warn(err));
  }, []);
  
  
  
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); }

  let handleCardClick = (data) => {
    setSelectedCardData(data); // Guarda toda la data de la card seleccionada en el estado del componente padre

  };

  return (
    <div className="App">
      <React.Fragment>
        <BarNav />
        <Search data={api} />
        
     

        {
          api?.map(item => ( // Aquí estaba el error, faltaba el paréntesis en el mapeo y el parámetro del mapeo (item)
          <Cards addToCart={handleAddToCart} className="cards" key={item.id} data={item} onCardClick={handleCardClick}  myOrders={ myOrders}   setMyOrders={setMyOrders}  />
                  ))

}
<MyOrder data={api} cart={cart} myOrders={myOrders} />


              </React.Fragment>
  
      
    </div>

    
    
      );
}

export default App;