import React from 'react'
import { useState, useEffect } from 'react'



function Home() {
const [api, setApi] = useState(null)
const link = ' https://api.escuelajs.co/api/v1/products'

useEffect(() => {
    fetch(link).then(res => res.json()).then(data => setApi(data))

})



  return (
    <div>H</div>
  )
}

export default Home