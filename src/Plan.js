import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import Ourplan from "./components/Ourplan";

function Plan(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
        <SubpageBanner name="Plan" indexpage="Home" indexvisit="/" activepage="Plan" />
         <Ourplan/>
        </>
    );
}

export default Plan;