import React from 'react'
import { useState } from 'react'

function Search( data ) {
   let  [watch, setWatch] = useState([])


  return (<div className='search-container2'>
    <div className='search-container'>
        <input className='search-input' type='text' placeholder='Search' onChange={(e) => {
  let change =  e.target.value
  setWatch(change) 
} }/> 
 <button className='search-btn' onClick={(data) => {
    if(watch.includes(data.title)){
        setWatch(data.title) 
    }
}}>Search</button> 

        
    </div>
    <p className='watch'>{watch}</p>
    </div>
)
}
export default Search