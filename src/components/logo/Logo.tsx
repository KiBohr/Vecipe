import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <Link to="/">
         <div className="flex items-center gap-4 justify-center cursor-pointer">
                <div className="h-10 w-10">
                    <img className="object-cover" src="/src/assets/img/Tomate_b.png" alt="logo" />
                </div>
                <h1 className="text-xl uppercase tracking-wider  self-end transistion ease-in-out hover:text-blue">.Vecipes</h1>
            </div>
        </Link>
            
     );
}
 
export default Logo;