import { Link } from "react-router-dom";
import { IRecipes } from "../../contract/interfaces/IData";

interface IItemProps{
    item: IRecipes
}

const RecipeItem = ({item} : IItemProps) => {
    return ( 
        <Link className="flex flex-col items-center text-blue transition ease-in-out hover:shadow-2xl hover:opacity-90 w-40" to={`/details/${item.id}`}>
        <div className=" flex flex-col items-center text-center gap-1 bg-white/50 pb-2 rounded-lg">
            <div className="h-30 w-40 md:h-40 md:w-40 overflow-hidden">
                <img className="object-cover rounded-t-lg" src={item.image} alt={item.name} />
            </div>
            <h2 className="text-wrap self-center text-sm">{item.name}</h2>
            
        </div>
    </Link>
     );
}
export default RecipeItem;