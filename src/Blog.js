import React, { useEffect } from "react";
import SubpageBanner from "./components/SubpageBanner";
import Pagination from './components/Pagination';
import BlogPage from "./components/BlogPage";



function Blog(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
         <SubpageBanner name="Blog" indexpage="Home" indexvisit="/" activepage="Blog" />
         <BlogPage/>
         
        </>
    );
}

export default Blog;