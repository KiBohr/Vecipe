import { ICategories } from "../../contract/interfaces/IData";
import Button from "../button/Button";

interface ICategoryProps{
    category: ICategories
}

const Category = ({category}: ICategoryProps) => {
    return ( 
        
    <div className="carousel-item">
        <Button styling="text-[0.8rem] font-light text-butter transition ease-in-out hover:text-brown hover:animate-pulse" text={category.name} path={`/recipes`}/>
    </div> );
}
 
export default Category;