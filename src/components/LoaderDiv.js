import React from "react";
import ImgLoader from "../images/Rhombus.gif";

function LoaderDiv() {

    return(
        <>
        <div className="loader">
            <div className="loader-content">
                <img src={ImgLoader} alt="Loader" className="loader-loader" />
            </div>
        </div>
        </>
    );
    
}

export default LoaderDiv;