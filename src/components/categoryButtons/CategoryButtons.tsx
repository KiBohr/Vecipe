
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
        <div className="carousel flex items-center justify-center gap-2 w-full overflow-x-auto space-x-4 bg-blue/60 py-2 mb-5">
        {categories.map((category) => (
          <Button
            key={category.id}
            styling="carousel-item carousel-center flex-shrink-0  text-sm md:text-base lg:text-lg text-butter/80 transition ease-in-out hover:text-brown/80"
            text={category.name}
            path={`/categories/${category.id}`}
          />
        ))}
      </div>
     );
}
 
export default CategoryButtons;