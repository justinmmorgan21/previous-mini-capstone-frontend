import axios from 'axios'
import {useState, useEffect} from 'react'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  // make request to carted products index, show that data to user
  const getData = () => {
    console.log('getting data');
    axios.get('http://localhost:3000/carted_products.json').then(response => {
      console.log(response.data);
      setCartedProducts(response.data)
    })
  }

  const buy = () => {
    console.log('buy')
    axios.post('http://localhost:3000/orders.json').then(response => {
      console.log(response.data);
    })
  }

  useEffect(getData, [])
  
  return (
    <div>
      <p>CPI</p>
      {cartedProducts.map(cp => (
        <div>
          <p>id: {cp.id}</p>
          <p>product: {cp.product.name}</p>
          <p>price: {cp.product.price}</p>
          <p>quantity: {cp.quantity}</p>

          <hr />
        </div>
      ))}
      <button onClick={buy}>Buy!</button>
    </div>
  )
}