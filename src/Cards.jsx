import React, { useState } from "react";
import { Window } from './WIndow/Window'
import imageAdd from './assets/2661440-removebg-preview.png'
import imageDelete from './assets/thrash-removebg-preview.png'
import { MyOrder } from "./WIndow/MyOrder";


function useWindowVisible(initialValue = false) {
  const [isWindowVisible, setWindowVisible] = useState(initialValue);

  return { isWindowVisible, setWindowVisible };
}




function Cards({ data, onCardClick, addToCart, setMyOrders, myOrders}) {

  const { isWindowVisible, setWindowVisible } = useWindowVisible(false);

  const functionAdd = (data) => {
    setMyOrders((item) => [...item, data])

    addToCart(data); 
    onCardClick(data)
    
  };


  const handleImageClick = (data) => {
    if(!isWindowVisible){ 
   onCardClick(data);
    setWindowVisible(true);
  }else{
    setWindowVisible(false)
  }

  
  };

  return (
    <div className="products-container">
      <div className="App-card">
        <img
          className="product-image"
          
          src={data.images}
          alt="imagen1"
          onClick={handleImageClick}
        />
        <h1  >{data.title}</h1>
        <p >  Precio: {data.price}</p>
        <button onClick={functionAdd} className="btn-card"><img className="img-btn" src={imageAdd} /> </button>
        <button className="btn-card"><img className="img-btn" src={imageDelete} /></button>
      </div>

      {isWindowVisible && <Window data={data} isVisible={setWindowVisible} />}
    </div>
  );
}

export default Cards;
export { useWindowVisible }