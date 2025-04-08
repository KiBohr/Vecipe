import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import RecipeList from "../recipeList/RecipeList";
import { RecipeContext } from "../../context/MainProvider";

const FavouriteRecipes = () => {
    
    const {recipeData} = useContext<RecipeContext | undefined>(mainContext)
  
    
    return ( 
        <section className="my-10 p-5 flex flex-col gap-5">
            <h2 className="text-blue text-3xl">Your Favourit recipes</h2>
            <div className=" grid grid-cols-3 gap-2">
                <RecipeList recipes={recipeData}/>
            </div>
            
        </section>
     );
}
 
export default FavouriteRecipes;