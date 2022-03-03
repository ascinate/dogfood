import React , {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import Bookingdiv from "./components/Bookingdiv";

function Booking() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
         <SubpageBanner name="Book Groming" indexpage="Home" indexvisit="/" activepage="Book Groming" />
         <Bookingdiv/>
        </>
    );
    
}
export default Booking;