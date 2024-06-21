import {useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'

export function OrdersShow() {
  const [order, setOrder] = useState({carted_products: []})
  // get data from rails
  const getOrder = () => {
    console.log('get order')    
    // const params = useParams()
    console.log(window.location.href.split("/").slice(-1)[0])
    axios.get(`http://localhost:3000/orders/${22}.json`).then(response => {
      console.log(response.data)
      setOrder(response.data)
    })
  }
  
  // show the data to the user
  useEffect(getOrder, [])
  
  return (
    <div>
      <p>orders show</p>
      <p>id: {order.id}</p>
      <p>subtotal: {order.subtotal}</p>
      <p>tax: {order.tax}</p>
      <p>total: {order.total}</p>
      cp length: {order.carted_products.length}

      {/* <button onClick={getOrder}>get order</button> */}
 
      {order.carted_products.map(cartedProduct => (
        <div>

          <p>quantity: {cartedProduct.quantity}</p>
          <p>product name: {cartedProduct.product.name}</p>
          <p>product price: {cartedProduct.product.price}</p>
        </div>
      ))}
    </div>
  )
}