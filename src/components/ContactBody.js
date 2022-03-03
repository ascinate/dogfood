import React from "react";
import ContactLeftdiv from "./ContactLeftdiv";
import ContactForm from "./ContactForm";

function ContactBody () {
    return (
        <>
         <div className="contact-total-bcody my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <ContactLeftdiv/>
                    </div>
                    <div className="col-lg-7">
                        <ContactForm/>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}
export default ContactBody;
