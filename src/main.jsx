import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import axios from "axios";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './homef/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import About from './about/About.jsx';
import Contact from './contactPage/Contact.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  children:[
    {
      path:"/",
  element:<Home/>
},

  {
    path:"/blog",
   element:<Blog/>
  },
  {
     path:"/shop",
     element:<Shop/>
  },
  {
    path:"shop/:id",
    element : <SingleProduct/>
  },
  {
    path:"/cart-page",
    element : <CartPage/>
  },
  {
    path:"/about",
     element:<About/>
  },
  {
    path:"/contact",
     element:<Contact/>
  },
  {
    path:"/signup",
     element:<Signup/>
  },
  {
    path:"/login",
     element:<Login/>
  }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
