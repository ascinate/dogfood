import React, { useState } from "react";
import { FaRegTimesCircle , FaPlus , FaMinus } from "react-icons/fa";
import productsorder from "./OrderSummery";

function CartLeft () {
    const [ workData , setworkData] =useState(productsorder);
    console.log(workData);
    return (
        <>
          <div className="cart-left-sec">
             <h2> Order Summary </h2>
             <hr/>
             <div className="tbale-cart">
             {
                workData.map((curElem) => {
                    const { id, prdocuts, proname, proamount } = curElem;
                    return (
                        <>
                        <div className="comon-sec-div-mn">
                           <div className="row align-items-center">
    
                        
                                <div className="col-lg-7">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <figure className="order-pic">
                                          <img src={prdocuts} alt="ps"/>
                                        </figure>
                                        <h5 className="cart-products-titel"> {proname} </h5>
        
                                        <div className="form-group">
                                            
                                        <div className="input-group w-auto justify-content-end align-items-center">
                                            <div class="number">
                                                <span class="minus"><FaMinus/></span>
                                                <input type="text" value="1"/>
                                                <span class="plus"><FaPlus/></span>
                                            </div>
                                         </div>
                                            
                                        </div>
        
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="d-flex d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 ps-lg-4 price-text"> $ {proamount} </h5>
                                        <a id="#" className="btn cross-bn">
                                            <FaRegTimesCircle/>
                                        </a>
                                    </div>
                                </div>
                           </div>
                        </div>

                        </>
                    );
                })
            }
                
             </div>
          </div>
        </>
    );
}
export default CartLeft;