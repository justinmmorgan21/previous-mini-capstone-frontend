import axios from "axios"
import { useEffect, useState } from 'react'

export function ProductsNew(props) {
  const [images, setImages] = useState([''])
  
  const createProduct = (event) => {    
    event.preventDefault();
    const params = new FormData(event.target)    
    props.onCreateProduct(params, () => {event.target.reset()})    
    console.log('creating product...')
  }


  
  return (
    <div>
      <p>hello frmo products new</p>
      <form onSubmit={createProduct}>
        <p>Name<input name="name" type="text" /></p>
        <p>Description<input name="description" type="text" /></p>
        <p>Price<input name="price" type="text" /></p>        
        <button>New product</button>
      </form>
    </div>
  )
}