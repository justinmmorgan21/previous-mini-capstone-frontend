import axios from 'axios'

export function ProductsShow(props) {
 
  
  return (
    <div>
      <h1>Product information</h1>
      <p>id: {props.product.id}</p>
      <p>Name: {props.product.name}</p>
      <p>description: {props.product.description}</p>
      <p>price: {props.product.price}</p>      

      
    </div>
  );
}