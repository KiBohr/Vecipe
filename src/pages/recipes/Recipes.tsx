import { useContext } from "react";
import { mainContext, RecipeContext } from "../../context/MainProvider";
import RecipeList from "../../components/recipeList/RecipeList";
import Banner from "../../components/banner/Banner";

const Recipes = () => {
    const {recipeData} = useContext<RecipeContext | undefined>(mainContext)
    
    
    return ( 
        <article>
            <Banner text="RECIPES" img="https://i.pinimg.com/736x/13/3f/19/133f19f075a1d1e2b9e8e21b579ff7be.jpg" imgDesc="picture of a platter with food" />
            <div className=" grid grid-cols-2 gap-2 p-5">
                <RecipeList recipes={recipeData}/>
            </div>
        </article>
     );
}
 
export default Recipes;