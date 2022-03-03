import React , {useEffect} from "react";
import { NavLink } from "react-router-dom";
import LoaderDiv from "./components/LoaderDiv";
import BannerHome from "./components/BannerHome";
import QuickContactHome from "./components/QuickContactHome";
import HomeCopainertbs from "./components/HomeCopainertbs";
import ChosingdivHome from "./components/ChosingdivHome";
import HowitworkHome from "./components/HowitworkHome";
import Ourwokdetail from "./components/Ourwokdetail";
import TreatcontentHome from "./components/TreatcontentHome";
import Ournutritionhome from "./components/Ournutritionhome";
import TeamHome from "./components/TeamHome";
import TesimonalSild from "./components/TesimonalSild";
import HomeBlogsec from "./components/HomeBlogsec";
import { FaLongArrowAltRight , FaShoppingBasket ,FaShoppingCart  } from "react-icons/fa";
import { BsFillCartFill, BsFillTelephoneFill, BsCalendarCheckFill } from "react-icons/bs";

function Home(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
         
          <BannerHome/>
          <section className="total-body">
              
              <QuickContactHome/>
              <HomeCopainertbs/>
              <ChosingdivHome/>
              <HowitworkHome/>
              <Ourwokdetail/>
              <TreatcontentHome/>
              <TeamHome/>
              <Ournutritionhome/>
              <TesimonalSild/>
              <HomeBlogsec/>
              
               
          </section>
        </>
    )
}

export default Home;