import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://demo-mini-capstone-api-3hzh.onrender.com";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
