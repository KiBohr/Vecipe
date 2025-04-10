import { useParams} from "react-router-dom";
import supabase from "../../utils/supabase";
import { useEffect, useState } from "react";
import { IIngredients, IRecipes } from "../../contract/interfaces/IData";
import Banner from "../../components/banner/Banner";

const RecipeDetail = () => {

    const {recipeParam} = useParams()
    const [details, setDetails] = useState<IRecipes>()


    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase.from("recipes").select("*, ingredients(*)").eq("id", recipeParam)
            if(data){
                setDetails(data[0] as unknown as IRecipes)
            // console.log("resp",resp.data[0])
            }
        }
        fetchData()
    }, [])
    // console.log(details)


    return ( 
        <section className="flex flex-col items-center  text-blue">
            <Banner img={details?.image} text={details?.name} imgDesc={details?.name}/>
           {/* <div className="flex flex-col gap1 items-center">
                <div className="h-80 w-90 overflow-hidden rounded-lg ">
                    <img className="object-cover" src={details?.image} alt={details?.name} />
                </div>
                <h1 className="text-3xl font-semi-bold text-blue mb-1 text-center">{details?.name}</h1>
           </div> */}
            
            <div className="flex flex-col items-center gap-2 text-sm justify-between mb-5 w-[80%]">
                <p className="text-sm text-center font-light text-blue/70">{details?.description}</p>
                <p className="text-blue/90">{`servings: ${details?.servings}`}</p>
            </div>

            <div className="flex flex-col items-center mb-2 gap-2 bg-white/40 px-10 py-5 rounded-lg transition ease-in-out hover:shadow-xl">
                <p className="text-2xl ">Ingredients:</p>
            {details?.ingredients?.map((ing: IIngredients) => {
                return(
                    <div className="font-light text-blue/70" key={ing.id}>
                        <p>{ing.quantity} {ing.unit} {ing.name}</p>
                        <p></p>
                    </div>
                )
            })
                }
            </div>
            <div className="p-5 flex flex-col gap-3 items-center justify-center">
                <h2 className="text-2xl">Instructions:</h2>
                <p className="text-blue/70 text-center">{details?.instructions}</p>
            </div>
            
            
            
            
            
            
        </section>
     );
}
 
export default RecipeDetail;