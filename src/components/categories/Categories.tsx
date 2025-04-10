
//dann brauche ich noch eine Filter-Funktion, die mir die Rezepte zu den passenden Categories anzeigt in page Recipes

import { useEffect, useState } from "react";
import { ICategories } from "../../contract/interfaces/IData";
import supabase from "../../utils/supabase";
import Loading from "../loading/Loading";
import Category from "../category/Category";
import { useParams } from "react-router-dom";


const Categories = () => {

    // const {categoryParam} = useParams()

// hier muss ein fetch für die Categories hin
    const [categories, setCategories] = useState<ICategories[]>([])
    
    const fetchCategories = async () => {
        try {
            const {data: categoryData} = await supabase.from("categories").select("*")
        // console.log("data",categoryData)
        setCategories(categoryData as ICategories[])
        } catch (error) {
            <Loading/>
            console.warn("fetching categories has issues", error)            
        }
    }

    //  hier wird die fetchFunktion aufgerufen
    useEffect(()=> {
        fetchCategories()
    },[])
    
    return ( 
        <article className="carousel flex items-center justify-center gap-4 mb-5 bg-blue/50 py-[0.2rem]">
            {categories.map((category : ICategories) => {
                return(
                      <Category key={category.id} category={category}/>
                )
            })}
        </article>
     );
}
 
export default Categories;