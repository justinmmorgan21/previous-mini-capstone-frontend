import axios from "axios"
import { useEffect, useState } from 'react'

export function ProductsNew(props) {  
  const [suppliers, setSuppliers] = useState([])
  
  const createProduct = (event) => {    
    event.preventDefault();
    const params = new FormData(event.target)    
    props.onCreateProduct(params, () => {event.target.reset()})    
    console.log('creating product...')
  }

  const getSuppliers = () => {
    console.log('getting suppliers')
    axios.get('/suppliers.json').then(response => {
      console.log(response.data);
      setSuppliers(response.data)

    })
  }

  useEffect(getSuppliers, [])


  
  return (
    <div>
      <p>hello frmo products new</p>
      <form onSubmit={createProduct}>
        <p>Name<input name="name" type="text" /></p>
        <p>Description<input name="description" type="text" /></p>
        <p>Price<input name="price" type="text" /></p>        
        <select name="supplier_id">
          {suppliers.map(supplier => (
            <option value={supplier.id}>{supplier.name}</option>
          ))}                   
        </select>       
        <br />
        <button>New product</button>
      </form>
    </div>
  )
}