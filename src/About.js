import React, {useEffect}  from "react";
import SubpageBanner from "./components/SubpageBanner";
import AboutHistory from "./components/AboutHistory";
import Ourmission from "./components/Ourmission";
import AboutWhychose from "./components/AboutWhychose";
import TesimonalSild from "./components/TesimonalSild";
import TeamHome from "./components/TeamHome";


function About(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
         <SubpageBanner name="About Us" indexpage="Home" indexvisit="/" activepage="About Us" />
         <div className="about-total my-5">
            <AboutHistory/>
            <AboutWhychose/>
            <Ourmission/>
            <TesimonalSild/>
            <TeamHome/>
         </div>
        </>
    );
}

export default About;