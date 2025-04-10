import Banner from "../../components/banner/Banner";
import FavouriteRecipes from "../../components/favouriteRecipes/FavouriteRecipes";
import { useEffect, useState } from "react";
import { IRecipes } from "../../contract/interfaces/IData";
import supabase from "../../utils/supabase";
import Categories from "../../components/categories/Categories";

//& beim mappen könnte ich noch spezifischer filtern, um die angezeigten Rezepte zu verändern


const Home = () => {
    const [favRecipe,setFavRecipe] = useState<IRecipes[]>()

    const fetchData = async () => {
        const resp = await supabase.from("recipes").select("*")
        // console.log(resp.data)
        setFavRecipe(resp.data as IRecipes[])
       
    }

    useEffect(() => {
        fetchData()
    },[])

    return ( 
        <section className="flex flex-col items-center">

            <Banner text="Welcome to VECIPES"
            desc="-where recipes are vegan and easy" img="https://i.pinimg.com/736x/c4/cc/46/c4cc46a4983a1e6d8a9fae42da3b8bb4.jpg" imgDesc="picture of a platter with food" />

            <Categories/>

            <div className="flex flex-col gap-4 mb-5">

                 <h2 className="text-blue text-3xl upper ">Your Favourits</h2>
                 
                <div className="grid grid-cols-2 gap-5">
                {favRecipe?.slice(12,16).map((favRecipe: IRecipes)=>{
                return(
                    <div key={crypto.randomUUID()}>
                        <FavouriteRecipes favRecipe={favRecipe}/>
                    </div>
                )
                })}
                </div>
            </div>
       
        </section>
     );
}
 
export default Home;