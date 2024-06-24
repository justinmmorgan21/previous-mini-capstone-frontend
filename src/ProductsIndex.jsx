export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>
      <br />
      <div class="row">
        {props.products.map(product => (
          <div key={product.id} class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description}.</p>
                <a onClick={() => props.onShowProduct(product)} class="btn btn-primary">Go somewhere</a>                
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>

      
      <p className="text-4xl font-bold underline">in products index</p>
      <div className="grid-cols-3 grid p-7">
        {props.products.map(product => (
          <div key={product.id} className="shadow-lg p-4 mb-4">
            <p>name: {product.name}</p>
            <p>price:  {product.price}</p>
            {/* {JSON.stringify(product.images[0] && product.images[0].url)} */}
            <img className="w-full aspect-[4-3] object-cover" src={product.images[0] && product.images[0].url} />
            <button className="border rounded border-gray-500 hover:bg-gray-100" onClick={() => props.onShowProduct(product)}>More info</button>            
          </div>
        ))}
      </div>
    </div>
  )
}