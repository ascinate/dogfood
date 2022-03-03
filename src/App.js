import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Header';
import Home from './Home';
import About from './About';
import Blog from "./Blog";
import Recipe from "./Recipe";
import Reviews from "./Reviews";
import Booking from "./Booking";
import Plan from './Plan';
import Contact from './Contact';
import BlogDetails from "./BlogDetails";
import Cart from './Cart';
import Checkout from './Checkout';
import OrderPage from "./OrderPage";
import Footer from './Footer';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
         <Header/>
         <Routes>
            <Route exact="true" path="/" element={<Home/>}/>
            <Route exact="true" path="/about" element={<About/>}/>
            <Route exact="true" path="/blog" element={<Blog/>}/>
            <Route exact="true" path="/recipe" element={<Recipe/>}/>
            <Route exact="true" path="/reviews" element={<Reviews/>}/>                       
            <Route exact="true" path="/booking" element={<Booking/>}/>   
            <Route exact="true" path="/plan" element={<Plan/>}/>
            <Route exact="true" path="/contact" element={<Contact/>}/>
            <Route exact="true" path="/blogdetails" element={<BlogDetails/>}/>
            <Route exact="true" path="/checkout" element={<Checkout/>}/>
            <Route exact="true" path="/orderpage" element={<OrderPage/>}/>
            <Route exact="true" path="/cart" element={<Cart/>}/>
           
         </Routes>
         <Footer/>
      </Router>
    </>
  );
}

export default App;
