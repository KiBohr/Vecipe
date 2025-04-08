import { Link } from "react-router-dom";
import { IRecipes } from "../../contract/interfaces/fetchData";

interface IItemProps{
    item: IRecipes
}

const RecipeItem = ({item} : IItemProps) => {
    return ( 
        <Link className="flex flex-col items-center" to={`/details/${item.id}`}>
        <div className="bg-white/50 pb-2 rounded-lg">
            <div className="h-40 w-50 overflow-hidden">
                <img className="object-cover rounded-t-lg" src={item.image} alt={item.name} />
            </div>
            <h2 className=" self-center text-sm">{item.name.slice(0,20)}</h2>
        </div>
    </Link>
     );
}
export default RecipeItem;