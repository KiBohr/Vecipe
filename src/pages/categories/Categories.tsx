import { useParams } from "react-router-dom";
import CategoryButtons from "../../components/categoryButtons/CategoryButtons";
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { IRecipes } from "../../contract/interfaces/IData";
import RecipeItem from "../../components/recipeItem/RecipeItem";
import Banner from "../../components/banner/Banner";

const Categories = () => {

    const {categoryParam} = useParams()

    // ich muss hier noch einen fetch von den recipes machen, und dann über die category_id auf die categorys zugreifen

    const [recipeCIds, setRecipeCIds] = useState<IRecipes[]>([])

    const fetchCategoryId = async () => {

        const {data:recipes, error} = await supabase.from("recipes").select("*").eq("category_id", categoryParam)
        // console.log(recipeWithCId)
        setRecipeCIds(recipes as IRecipes[])

        if(error){
            console.warn("fetching category_ids wasn`t successfull",error)
        }
    }

    useEffect(() => {
        fetchCategoryId()
    },[categoryParam])
    console.log(recipeCIds)



    return ( 
        <article>
            <Banner text="RECIPES"
             img="https://i.pinimg.com/736x/13/3f/19/133f19f075a1d1e2b9e8e21b579ff7be.jpg" imgDesc="picture of a platter with food" />
             <CategoryButtons/>
             <div className="grid grid-cols-2 p-5">
                {recipeCIds.map((recipe) => {
                return(
                        <RecipeItem item={recipe}/>
                )
            })}
             </div>
        </article>
     );
}

export default Categories;