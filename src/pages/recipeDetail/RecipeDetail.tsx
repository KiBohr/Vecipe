import { useParams} from "react-router-dom";
import supabase from "../../utils/supabase";
import { useEffect, useState } from "react";
import { IIngredients, IRecipes } from "../../contract/interfaces/IData";

const RecipeDetail = () => {

    const {recipeParam} = useParams()
    const [details, setDetails] = useState<IRecipes>()


    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase.from("recipes").select("*, ingredients(*)").eq("id", recipeParam)
            setDetails(data[0] as unknown as IRecipes)
            // console.log("resp",resp.data[0])
        }
        fetchData()
    }, [])
    // console.log(details)


    // ! check nach fehlern
    // useEffect(() => {
    //     console.log("hi")
    //     const getDetails = async () => {
    //         console.log("halöl");
    //         try {
    //             console.log("resp")
    //             const resp = await supabase.from("recipes").select("*, ingredients(*)").eq("id", recipeParam)
    //             setDetails(resp as unknown as IRecipes)
               
    //         } catch (error) {
    //             console.warn("Fetching Details error:", error)
    //         }finally{
    //             console.log("hallel");
    //         }
    //         getDetails()
    //     }
    // },[])

    // console.log("detail:",details)
   

    return ( 
        <section className="flex flex-col items-center p-5 text-blue">
            <h1 className="text-3xl font-semi-bold text-blue mb-1">{details?.name}</h1>
            <div className="h-80 w-100 overflow-hidden rounded-lg ">
                <img className="object-cover" src={details?.image} alt={details?.name} />
            </div>
            <div className="flex items-center gap-20 text-sm justify-between mb-5">
                <p >{`servings: ${details?.servings}`}</p>
            </div>

            <div className="flex flex-col items-center mb-2 gap-2 bg-white/40 px-20 py-5 rounded-lg transition ease-in-out hover:shadow-xl">
                <p className="text-2xl uppercase">ingredients:</p>
            {details?.ingredients?.map((ing: IIngredients) => {
                return(
                    <div key={ing.id}>
                        <p>{ing.quantity} {ing.unit} {ing.name}</p>
                        <p></p>
                    </div>
                )
            })
                }
            </div>
            <p className="text-d-blue/60">{details?.description}</p>
            
            
            
            
            
        </section>
     );
}
 
export default RecipeDetail;