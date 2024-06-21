import { useState, useEffect } from 'react'
import axios from 'axios'

export function OrdersIndex() {
  const [orders, setOrders] = useState([])
  // get the data from rails, show to the user
  const getOrders = () => {
    console.log('get orders')
    axios.get('http://localhost:3000/orders.json').then(response => {
      console.log(response.data);
      setOrders(response.data)
    })
  }

  useEffect(getOrders, [])
  
  return (
    <div>
      {/* subtotal */}
      {/* tax */}
      {/* total */}
      {/* each product's name and price and quantity */}
     <p>orders index</p>
     {orders.map(order => (
      <div>
        <p>id: {order.id}</p>
        <p>subtotal: {order.subtotal}</p>
        <p>tax: {order.tax}</p>
        <p>total: {order.total}</p>
        <p>number of items: {order.carted_products.length}</p>
        <a href={`/orders/${order.id}`}>More Info</a>

        <hr />
        <hr />
        <hr />
      </div>
     ))}
     <button onClick={getOrders}>get orders</button>
    </div>
  )
}