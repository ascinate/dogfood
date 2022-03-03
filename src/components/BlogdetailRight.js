import React, { useState } from "react";
import RecentblogPost from "./RecentblogPost";
import BlogdetailsCategories from "./BlogdetailsCategories";

function BlogdetailRight (params) {
    return (
        <>
            <BlogdetailsCategories/>
            <RecentblogPost/>
        </>
    );
    
}
export default BlogdetailRight;