import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../src/images/logo-dog.png";
import { FaMapMarkerAlt , FaMobileAlt, FaEnvelope, FaWindowClose } from "react-icons/fa";
import NewLetter from "./components/NewLetter";
import logomobileslide from "../src/images/logo.png";
import { FaUserCircle , FaLock} from "react-icons/fa";



function Footer(){
    return(
        <>
        <NewLetter/>
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4">
                   <div className="col">
                     <div className="comon-ft-div">
                        <NavLink to="/">
                           <img src={FooterLogo} alt="logofooter"/>
                        </NavLink>
                        <ul className="list-unstyled mt-3">
                          <li> <FaMapMarkerAlt/> No: 58 A, East Madison Street, Baltimore, MD, USA 4508 </li>
                          <li> <FaMobileAlt/> 0000 - 123 - 456789 </li>
                          <li> <FaEnvelope/> info@example.com </li>
                        </ul>
                     </div>
                     
                   </div>
                   <div className="col">
                      <div className="comon-ft-div d-grid justify-content-md-center">
                        <h5>Links</h5>
                        <ul className="list-unstyled mt-3">
                          <li> <NavLink to="/blog">  Blog  </NavLink> </li>
                          <li> <NavLink to="/plan"> Plan </NavLink>  </li>
                          <li> <NavLink to="/recipe"> Recipes  </NavLink> </li>
                          <li> <NavLink to="/reviews"> Review  </NavLink> </li>
                        </ul>
                      </div>
                     </div>
                     <div className="col">
                       <div className="comon-ft-div d-grid justify-content-md-end">
                            <h5>Help</h5>
                            <ul className="list-unstyled mt-3">
                                <li> <NavLink to="/contact"> Contact Us  </NavLink></li>
                                <li> <NavLink to="/about"> About Us </NavLink> </li>
                                <li> <NavLink to="/"> Refund & Return </NavLink> </li>
                                <li> <NavLink to="/booking"> Grooming </NavLink> </li>
                            </ul>
                       </div>
                        
                     </div>
                     <div className="col">
                       <div className="comon-ft-div d-grid justify-content-md-end">
                        <h5>Information</h5>
                        <ul className="list-unstyled mt-3">
                            <li> <NavLink to="/"> Store Location </NavLink></li>
                            <li> <NavLink to="/"> Help & Faq's </NavLink> </li>
                            <li> <NavLink to="/"> Privacy Policy </NavLink> </li>
                        </ul>
                       </div>

                        
                     </div>
                </div>
                <hr/>
                <p className="text-center text-white"> 2022-2023 © Dog Food. All rights reserved.</p>
            </div>
        
        </footer>
           
      
        <div className="modal fade login-div-modal" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    
                  
                    </div>
                    <div className="modal-body">
                        
                        <div id="login-td-div" className="com-div-md">
                              <span className="text-center d-table m-auto user-icon">
                                 <FaUserCircle/>
                              </span>
                            <h5 className="text-center mb-3"> Sign In </h5>
                              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                              <div className="login-modal-pn">
                            
                                    <div className="cm-select-login mt-3">
                                      <div className="country-dp">
                                        
                                        <input type="email" className="form-control" placeholder="Username Or Email" alt="pn"/>
                                      </div>
                                      <div className="phone-div">
                                        
                                          <input type="password" className="form-control" placeholder="Password" alt="pn"/>
                                      </div>
                                      
                                    
                                    </div>
                            
                            
                            
                                  <button className="btn continue-bn"> <FaLock/> SIGN IN </button>
                            </div>
          
                       <p className="text-center  mt-3">  
                           <a data-bs-toggle="modal" className="regster-bn" data-bs-target="#lostpsModal" data-bs-dismiss="modal"> Lost Password ? </a>  </p>
                    
                    
                        <p className="text-center  mt-3"> Do not have an account? 
                            <a data-bs-toggle="modal" className="regster-bn" data-bs-target="#registerModal" data-bs-dismiss="modal"> Register </a>  </p>
                      </div>

                    </div>
                    
                </div>
            </div>
        </div>

       

        <div className="modal fade login-div-modal" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                
              </div>
              <div className="modal-body">
                <div id="login-td-div" className="com-div-md">
                  <span className="text-center d-table m-auto user-icon"> <FaUserCircle/> </span>
                  <h5 className="text-center mb-3"> Register </h5>
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                  <div className="login-modal-pn">
                  
                  <div className="cm-select-login mt-3">
                    <div className="country-dp">
                      
                      <input type="text" className="form-control" placeholder="Full Name" alt="pn"/>
                    </div>
                    <div className="phone-div">
                      
                        <input type="email" className="form-control" placeholder="Email or Phone Number" alt="pn"/>
                    </div>
                    <div className="phone-div">
                  
                      <input type="password" className="form-control" placeholder="Create Password" alt="pn"/>
                    </div>
                    <div className="phone-div">
                  
                      <input type="password" className="form-control" placeholder="Confirm Password" alt="pn"/>
                    </div>
                    
                    <div className="forget2 mt-3 ml-3 d-flex justify-content-between">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1"> By clicking Register, you agree to our
                          Terms of Use
                          and
                          Cookie Policy</label>
                    </div>
                  
                  </div>
                  
                  
                  
                  <button class="btn continue-bn"> Register </button>
                </div>

                  <p class="text-center  mt-3"> Do not have an account? 
                    <a data-bs-toggle="modal" class="regster-bn" data-bs-target="#loginModal" data-bs-dismiss="modal"> Login </a>  </p>
                </div>
              </div>
            
            </div>
          </div>
        </div>


     

        <div className="modal fade login-div-modal" id="lostpsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                 
                </div>
                <div className="modal-body">
                  <div id="login-td-div" className="com-div-md">
                    <span className="text-center d-table m-auto user-icon"> <FaUserCircle/> </span>
                    <h5 className="text-center mb-3"> Forget Your Password? </h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                    <div className="login-modal-pn">
                    <p> We'll email you a link to reset your password</p>
                    <div className="cm-select-login mt-3">
                      
                      <div className="phone-div">
                        
                          <input type="email" className="form-control" placeholder="Enter Your Email " alt="pn"/>
                      </div>
                      
                    
                    </div>
                    
                    
                    
                    <button className="btn continue-bn"> Send Me a password reset Link </button>
                  </div>

                  </div>
                </div>
              
              </div>
            </div>
        </div>
        


      
        <div className="offcanvas offcanvas-start menu-mobile-modal" tabindex="-1" id="offcanvasmenu" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                Close <FaWindowClose/>
            </button>
          </div>
          <div className="offcanvas-body menu-modal">
             <NavLink to="/">
                <img src={logomobileslide} alt="logom"/>
             </NavLink>

            <ul className="list-unstyled mt-4">
              <li data-bs-dismiss="offcanvas"><NavLink  className="dropdown-item" to="/">Home </NavLink> </li>
              <li data-bs-dismiss="offcanvas"><NavLink  className="dropdown-item" to="/about">About</NavLink> </li>
              <li data-bs-dismiss="offcanvas"><NavLink  className="dropdown-item" to="/blog">Blog </NavLink> </li>
              <li data-bs-dismiss="offcanvas"><NavLink   className="dropdown-item" to="/recipe">Recipes </NavLink> </li>
              <li data-bs-dismiss="offcanvas"> <NavLink  className="dropdown-item" to="/review">Review </NavLink> </li>
              <li data-bs-dismiss="offcanvas"><NavLink  className="dropdown-item" to="/plan">Plan </NavLink> </li>
              <li data-bs-dismiss="offcanvas"><NavLink  className="dropdown-item" to="/contact">Help </NavLink> </li>
              <li data-bs-dismiss="offcanvas"><NavLink  className="dropdown-item" to="/orderpage">Order Now</NavLink> </li>
              <li data-bs-dismiss="offcanvas"><a  className="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginModal">Login </a> </li>
            </ul>
            
          </div>
        </div>

        
        
        </>
    );
}

export default Footer;