import React, {useEffect} from "react";
import SubpageBanner from "./components/SubpageBanner";
import RecipesBody from "./components/RecipesBody";

function Recipe(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
          <SubpageBanner name="Recipes" indexpage="Home" indexvisit="/" activepage="Recipes" />
          <div className="recipes-total mt-5">
             <RecipesBody/>
          </div>
        </>
    );
}

export default Recipe;