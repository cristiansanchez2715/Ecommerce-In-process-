
import { useState } from 'react'
import { myOrders } from '../Cards';

function MyOrder({  cart, data, myOrders }) {


  const miOrden = (myOrders) => ( 
    myOrders.map(item => (
      <li className='new-item' key={item.id}>
       Product: {item.title}  Price: {item.price}
      </li>
    ))
  )
  
    return (
      <div className='my-order-container'>
        <div className='my-order'>
          <h2>My Order</h2>
          <ul>
            {miOrden(myOrders)}
            
          </ul>
          <h3>Total Order: </h3>
          {/* {totalOrder} */}
        </div>
      </div>
    );
  }
  
  export { MyOrder };