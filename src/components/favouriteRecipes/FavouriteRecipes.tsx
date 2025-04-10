import { Link } from "react-router-dom";
import { IRecipes } from "../../contract/interfaces/IData";

interface IFavRecipesProps{
    favRecipe : IRecipes
}

const FavouriteRecipes = ({favRecipe}: IFavRecipesProps ) => {
    
    
    return ( 
        <Link to={`/details/${favRecipe.id}`} className="w-40 flex fley-col transition ease-in-out hover:shadow-2xl hover:opacity-80">
            <div className="bg-white/50 pb-2 rounded-lg flex flex-col items-center gap-1">
            <div className="h-30 w-40 overflow-hidden">
                <img className="object-cover rounded-t-lg" src={favRecipe.image} alt={favRecipe.name} />
            </div>
            <h2 className="text-blue self-center text-[0.8rem] text-center">{favRecipe.name}</h2>
         </div>
        </Link>
     );
}
 
export default FavouriteRecipes;