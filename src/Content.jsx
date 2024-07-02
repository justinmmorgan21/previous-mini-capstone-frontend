import axios from 'axios'
import { ProductsIndex } from './ProductsIndex'
import { OrdersIndex } from './OrdersIndex'
import { OrdersShow } from './OrdersShow'
import { ProductsShow } from './ProductsShow'
import { ProductsNew } from './ProductsNew'
import { CartedProductsIndex } from './CartedProductsIndex'
import { Modal } from './Modal'
import { Signup } from './Signup'
import { Login } from './Login'
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";


export function Content() {  
  const [products, setProducts] = useState([])
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});


  const handleIndexProducts = () => {
    console.log('get data from rails')
    axios.get("http://localhost:3000/products.json").then(response => {
      // console.log(response.data)
      setProducts(response.data)
    })
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log('creating product')
    axios.post("/products.json", params).then(response => {
      console.log(response.data);  
      // reset the products array to add the new product    // 
      setProducts([...products, response.data])
      successCallback()
    })
  }

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };
    
  
  // handleIndexProducts()
  useEffect(handleIndexProducts, [])
  
  return (
    <div className="container">     
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct}/>} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="/cart" element={<CartedProductsIndex />} />
        <Route path="/orders" element={<OrdersIndex />} />
        <Route path="/orders/:id" element={<OrdersShow />} />

        {/* <Route path="/products" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} /> */}


      </Routes>
      
     
      
      {/* <button onClick={handleIndexProducts}>Get products</button> */}
      
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onClose={handleClose} />
      </Modal>
    </div>
  )
}


// get data from rails
// show that data to the user
// give links/buttons/etc for user to navigate the app
// mimic httpie web requests to rails for various CRUD actions




// orders show
  // orders index
// show images of products
// dynamically show total




