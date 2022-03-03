import { FaLongArrowAltRight , FaShoppingBasket ,FaShoppingCart  } from "react-icons/fa";
import { BsFillCartFill, BsFillTelephoneFill, BsCalendarCheckFill } from "react-icons/bs";

const QuickDetails =[

    {
       id:1,
       images:"images/3082051.png",
       name:"Buy Our Food",
       descrition:"There are many variations of passages of Lorem Ipsum available ",
       link:"./order",
       buttonName:"Order Now",
       icon:<BsFillCartFill/>
  
    },

    {
        id:2,
        images:"images/2437630.png",
        name:"quick enquiry",
        descrition:"All the Lorem Ipsum generators on the Internet tend ",
        link:"./contact",
        buttonName:"Contact Us",
        icon:<BsFillTelephoneFill/>
   
     },
     {
        id:3,
        images:"images/2460877.png",
        name:"Book Our Groming Servise",
        descrition:"Lorem Ipsum passage, and going through the cites of classical ",
        link:"./bokking",
        buttonName:"Book Now",
        icon:<BsCalendarCheckFill/>
   
     },
]

export default QuickDetails;