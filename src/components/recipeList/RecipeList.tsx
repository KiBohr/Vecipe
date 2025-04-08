import { IRecipes } from "../../contract/interfaces/fetchData";

import RecipeItem from "../recipeItem/RecipeItem";

interface recipeProps {
    recipes: IRecipes[]
}

const RecipeList = ({recipes} : recipeProps) => {

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