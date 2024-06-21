import axios from 'axios'

export function ProductsShow(props) {
  const submit = (event) => {
    event.preventDefault()
    console.log('in submit')
    const params = new FormData(event.target)
    // pick the quantity out of event.target or add product id to the form
    
    // how can i make the web request the same as httpie?
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
      // redirect to the cart
      window.location.href = '/'
    })
  }
  
  return (
    <div>
      <h1>Product information</h1>
      <p>id: {props.product.id}</p>
      <p>Name: {props.product.name}</p>
      <p>description: {props.product.description}</p>
      <p>price: {props.product.price}</p>      
      <form onSubmit={submit}>
        <p>Quantity: <input type="text" name="quantity" /></p>
        <p><input type="hidden" name="product_id" defaultValue={props.product.id} /></p>

        <input type="submit" value="add to cart" />
      </form>
      
    </div>
  );
}