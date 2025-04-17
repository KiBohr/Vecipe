import { IRecipes } from "../../contract/interfaces/IData";
import Loading from "../loading/Loading";

import RecipeItem from "../recipeItem/RecipeItem";

interface IRecipeProps {
    recipes: IRecipes[]
}

const RecipeList = ({recipes} : IRecipeProps) => {

    if(!recipes){
        return <Loading/>
    }
   
    // console.log(recipes);
    return ( 
   <>
    {recipes.map((item: IRecipes)=>{
        return (
            <div key={crypto.randomUUID()}>
                <RecipeItem item={item}/>
            </div>
        )
    })}
   </>

     );
}
 
export default RecipeList;