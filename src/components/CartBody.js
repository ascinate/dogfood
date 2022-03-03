import React from "react";
import CartLeft from "./CartLeft";
import OderTotal from "./OderTotal";
function CartBody () {

    return(
        <>
          <div className="cart-body-sec my-5">
             <div className="container">
                <div className="row gx-lg-5">
                    <div className="col-md-8 col-lg-8">
                        <CartLeft/>
                    </div>
                    <div className="col-md-4 col-lg-4">
                       <OderTotal/>
                    </div>
                </div>
             </div>
          </div>
        </>
    );
    
}

export default CartBody;