
//dann brauche ich noch eine Filter-Funktion, die mir die Rezepte zu den passenden Categories anzeigt in page Recipes

import { useEffect, useState } from "react";
import { ICategories } from "../../contract/interfaces/IData";
import supabase from "../../utils/supabase";
import Button from "../button/Button";


const CategoryButtons = () => {

    // const {categoryParam} = useParams()

// hier muss ein fetch für die Categories hin
    const [categories, setCategories] = useState<ICategories[]>([])
    
    const fetchCategories = async () => {
        try {
            const {data: categoryData} = await supabase.from("categories").select("*")
        // console.log("data",categoryData)
        setCategories(categoryData as ICategories[])
        } catch (error) {
            console.warn("fetching categories has issues", error)            
        }
    }

    //  hier wird die fetchFunktion aufgerufen
    useEffect(()=> {
        fetchCategories()
    },[])
    
    return ( 
        <article className="carousel flex items-center justify-end px-5 gap-4 mb-5 bg-blue/50 py-[0.5rem] w-full">
            {categories.map((category : ICategories) => {
                return(
                      <Button styling=" carousel-item text-sm md:text-base lg:text-lg text-butter/80 transition ease-in-out hover:text-brown/80" text={category.name} path={`/categories/${category.id}`}/>
                )
            })}
        </article>
     );
}
 
export default CategoryButtons;