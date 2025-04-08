import { useContext } from "react";
import { mainContext, RecipeContext } from "../../context/MainProvider";
import RecipeList from "../../components/recipeList/RecipeList";

const Recipes = () => {
    const {recipeData} = useContext<RecipeContext | undefined>(mainContext)
    
    
    return ( 
        <article>
            <div className=" grid grid-cols-2 gap-2 p-5">
                <RecipeList recipes={recipeData}/>
            </div>
        </article>
     );
}
 
export default Recipes;