import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactForm () {
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease',
            delay: 0,
            once: true,
            duration: 800,
          
          });
    });
    return (
        <>
         <div className="contact-form-div" data-aos="fade-right">
                <h6 className="mb-0">Send us a message</h6>
                <h2> Fill The Form Below </h2>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col-lg-6">
                       <input type="text" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="col-lg-6">
                       <input type="text" className="form-control" placeholder="Phone"/>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" placeholder="Subject"/>
                    </div>
                    <div className="col-lg-12">
                        <textarea className="form-control mesg-fild" placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12">
                        <input type="submit" className="btn subimt-message" value="Submit" />
                    </div>
                </div>
         </div>
        </>
    );
    
}
export default ContactForm;