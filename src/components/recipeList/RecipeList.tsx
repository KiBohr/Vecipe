import { IRecipes } from "../../contract/interfaces/IData";

import RecipeItem from "../recipeItem/RecipeItem";

interface IRecipeProps {
    recipes: IRecipes[]
}

const RecipeList = ({recipes} : IRecipeProps) => {

    if(!recipes){
        return <div>nö</div>
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