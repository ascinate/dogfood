import React from "react";

function CommentForm() {
     return(
         <>
           <div className="leave-commnet-sec">
              <h2> Leave a Comment </h2>
              <div className="row">
                 <div className="col-lg-6">
                    <div className="form-group">
                       <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                 </div>
                 <div className="col-lg-6">
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                 </div>
                 <div className="col-lg-12">
                     <div className="form-group">
                        <textarea className="form-control" placeholder="Message" ></textarea>
                     </div>
                 </div>
                 <div className="col-lg-12">
                     <div className="form-group">
                        <input type="submit" className="btn post-bn" value="Post Comment" />
                     </div>
                 </div>

              </div>
           </div>
         </>
     );
}
export default CommentForm;
