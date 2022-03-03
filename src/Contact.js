import React , {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import ContactBody from "./components/ContactBody";

function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
        <SubpageBanner name="Contact Us" indexpage="Home" indexvisit="/" activepage="Contact Us" />
        <ContactBody/>
        </>
    );
}

export default Contact;