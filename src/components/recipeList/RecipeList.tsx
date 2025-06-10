import { IRecipes } from "../../contract/interfaces/IData";
import Loading from "../loading/Loading";

import RecipeItem from "../recipeItem/RecipeItem";

interface IRecipeProps {
    recipes: IRecipes[]
}

const RecipeList = ({recipes} : IRecipeProps) => {

    return ( 
    <>
    {/* { !recipes && <Loading/>}

    {recipes.map((item: IRecipes) => {
        return(
            <div key={item.id}>
                <RecipeItem item={item} />
            </div>
        )
        })
    } */}

        {recipes !== null
            ? recipes.map((item: IRecipes) => (
                <div key={item.id}>
                <RecipeItem item={item} />
                </div>
            ))
            // When recipes is loaded (not null), map and render your items. When recipes is null, render 10 <Loading /> components as placeholders.
            : Array.from({ length: 10 }).map((_, idx) => (
                <div className="grid grid-cols-2 gap-10 justify-items-center">
                    <Loading key={idx} />
                </div>
                
            ))}
    </>
    )

}
 
export default RecipeList;