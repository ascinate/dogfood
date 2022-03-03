import React from "react";
import planimg from "../images/plan2.png";
import { BsFillCheckCircleFill , BsFillCaretRightSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Greatplan () {
     return(
         <>
           <div className="comon-paln-sec mb-5 mb-lg-0">
              <div className="img-box-plan">
                    <figure>
                        <img src={planimg} alt="planimg"/>
                        
                    </figure>
                    <span className="price"> $ 299 <br/> <i>/mo</i> </span>
               </div>
               <div className="comon-plan-div col-lg-9 d-table m-auto mt-4">
                    <h5>  Great Plan </h5>
                    <p className="text-center"> Dog food subscription services simplify pet ownership. </p>
                    <ul className="list-unstyled d-grid justify-content-center">
                        <li> <BsFillCheckCircleFill/> Made in the USA </li>
                        <li> <BsFillCheckCircleFill/> High quality ingredients </li>
                        <li> <BsFillCheckCircleFill/> Complete & balanced </li>
                    </ul>

                    <NavLink to="/plan" className="btn plan-bn-cm m-auto mt-3 d-table"> Get Started
                    <BsFillCaretRightSquareFill/> </NavLink>
               </div>
               
               
           </div>
         </>
     );
}
export default Greatplan;