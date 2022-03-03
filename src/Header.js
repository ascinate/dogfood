import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../src/images/logo.png";
import cartimgn from "../src/images/food-menu.jpg";
import cartimgm from "../src/images/food-menu2.webp";
import { FaUserCircle , FaShoppingBasket ,FaRegWindowClose  } from "react-icons/fa";

function Header(){

    return(
        <>
         <header className="mn-head">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                       <img src={Logo} alt="logo" />
                    </NavLink>
                    <div className="d-block mbile-checkout ms-auto d-lg-none">
                      <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaShoppingBasket/>
                            <span className="cart-nuber">
                                2
                            </span>
                            </button>
                            <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                                
                                <li>
                                <div className="comon-cart-ps">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <NavLink exact="true"  to="/" className="products-sm-pic">
                                            <figure>
                                                <img src={cartimgn} alt="bn"/>
                                            </figure>
                                        </NavLink>
                                        <div className="cart-ps-details">
                                            <NavLink exact="true" to="/" className="titel-crt-products">
                                            viverra aliquam
                                            </NavLink>
                                            <h6> $12.52 </h6>
                                            
                                        </div>
                                        <a  className="close-crt"> <FaRegWindowClose/> </a>
                                    </div>
                                </div>
                                <div className="comon-cart-ps">
                                    <div className="d-flex align-items-center justify-content-between">
                                    <NavLink exact="true" to="/" className="products-sm-pic">
                                        <figure>
                                            <img src={cartimgm} alt="bn2"/>
                                        </figure>
                                    </NavLink>
                                    <div className="cart-ps-details">
                                        <NavLink exact="true" to="/" className="titel-crt-products">
                                        viverra aliquam
                                        </NavLink>
                                        <h6> $12.52 </h6>
                                    
                                    </div>
                                    <a className="close-crt"> <FaRegWindowClose/> </a>
                                
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="sub-total-products d-flex align-items-center justify-content-between">
                                    <h6> Subtotal:  </h6>
                                    <h4> $36.52 </h4>
                                </div>
                                </li>
                                <li>
                                <NavLink exact to="/cart" className="btn d-table cart-drop-bn"> View Cart </NavLink>
                                </li>
                                <li>
                                <NavLink exact to="/checkout" className="btn d-table check-drop-bn"> Check out </NavLink>
                                </li>
                            
                            </ul>
                       </div>
                    </div>
                    <button className="navbar-toggler ms-4" type="button" data-bs-toggle="offcanvas" href="#offcanvasmenu" role="button" aria-controls="offcanvasmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-md-auto ps-md-4">
                            <li className="nav-item">
                                <NavLink exact="true" activeClassName="menu_active"  className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
              
                            <li className="nav-item">
                                <NavLink  exact="true" activeClassName="menu_active" className="nav-link" to="/recipe">Recipes </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  exact="true" activeClassName="menu_active" className="nav-link" to="/reviews">Review </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Page
                                </a>
                                <ul className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdown">
                                    <li> <NavLink exact="true" className="dropdown-item" to="/about">About </NavLink> </li>
                                    <li> <NavLink exact="true"  className="dropdown-item" to="/blog">Blog</NavLink> </li>
                                    <li> <NavLink  exact="true"  className="dropdown-item" to="/plan"> Plan </NavLink> </li>
                                    
                                </ul>
                            </li>
                            
                            
                        
                        </ul>
                        <div className="log-cart-div ">
                           <ul className="list-unstyled d-flex align-items-center m-0">
                             <li>
                               <NavLink exact="true" activeClassName="menu_active" className="nav-link" to="/contact">Help</NavLink>
                             </li>
                             <li>
                               <a className="login-bn" data-bs-toggle="modal" data-bs-target="#loginModal">
                               <FaUserCircle/> </a>
                             </li>
                             <li>
                               <NavLink className="order-home-bn" to="/orderpage">
                                Order Now </NavLink>
                             </li>
                             <li>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                       <FaShoppingBasket/>
                                       <span className="cart-nuber">
                                          2
                                       </span>
                                    </button>
                                    <ul className="dropdown-menu shadow cart-dropdown-ne" aria-labelledby="dropdownMenuButton1">
                                                           
                                        <li>
                                        <div className="comon-cart-ps">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <NavLink exact="true"  to="/" className="products-sm-pic">
                                                    <figure>
                                                        <img src={cartimgn} alt="bn"/>
                                                    </figure>
                                                </NavLink>
                                                <div className="cart-ps-details">
                                                    <NavLink exact="true" to="/" className="titel-crt-products">
                                                    viverra aliquam
                                                    </NavLink>
                                                    <h6> $12.52 </h6>
                                                    
                                                </div>
                                                <a  className="close-crt"> <FaRegWindowClose/> </a>
                                            </div>
                                        </div>
                                        <div className="comon-cart-ps">
                                            <div className="d-flex align-items-center justify-content-between">
                                            <NavLink exact="true" to="/" className="products-sm-pic">
                                                <figure>
                                                    <img src={cartimgm} alt="bn2"/>
                                                </figure>
                                            </NavLink>
                                            <div className="cart-ps-details">
                                                <NavLink exact="true" to="/" className="titel-crt-products">
                                                viverra aliquam
                                                </NavLink>
                                                <h6> $12.52 </h6>
                                               
                                            </div>
                                            <a className="close-crt"> <FaRegWindowClose/> </a>
                                          
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="sub-total-products d-flex align-items-center justify-content-between">
                                            <h6> Subtotal:  </h6>
                                            <h4> $36.52 </h4>
                                        </div>
                                        </li>
                                        <li>
                                        <NavLink exact="true" to="/cart" className="btn d-table cart-drop-bn"> View Cart </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact="true"  to="/checkout" className="btn d-table check-drop-bn"> Check out </NavLink>
                                        </li>
                                    
                                    </ul>
                                </div>
                             </li>
                           </ul>
                        </div>
                        
                    </div>
                </div>
            </nav>
         </header>
        </>
    )
}

export default Header;