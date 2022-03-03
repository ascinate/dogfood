import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import BlogdetailsLeftdiv from "./components/BlogdetailsLeftdiv";
import BlogdetailRight from "./components/BlogdetailRight";

function BlogDetails() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
          <SubpageBanner name="Blog Details" indexpage="Home" indexvisit="/" activepage="Blog Details" />
          <div className="container">
             <div className="row  mt-5">
                <div className="col-lg-8">
                   <BlogdetailsLeftdiv/>
                </div>
                <div className="col-lg-4">
                    <BlogdetailRight/>
                </div>
             </div>
          </div>
        </>
    );
    
}

export default BlogDetails;