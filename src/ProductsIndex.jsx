export function ProductsIndex(props) {
  console.log(props.products)
  return (
    <div>
      <br />
      <div className="row">
        {props.products.map(product => (
          <div key={product.id} className="col-sm-6">
            <div className="card">
              {/* <img width="200px" height="200px" src={product.images[0].url} className="card-img-top" alt="..."></img> */}
              <div id={`carouselExample${product.id}`} className="carousel slide">
                <div className="carousel-inner">
                  {product.images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img src={image.url} className="d-block w-100" alt="..." />
                    </div>
                  ))}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${product.id}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${product.id}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name && product.name.substring(0,30)}</h5>
                <p className="card-text">{product.description && product.description.substring(0,8)}.</p>
                
                <p><a onClick={() => props.onShowProduct(product)} className="btn btn-primary">Go somewhere</a></p>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>

      
      <p className="text-4xl font-bold underline">in products index</p>
      <div className="grid-cols-3 grid p-7">
        
      </div>
    </div>
  )
}