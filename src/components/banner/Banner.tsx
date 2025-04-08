import { Link } from "react-router-dom";


const Banner = () => {
    return ( 
        <Link to="/recipes">
            <div className="w-full h-50 overflow-hidden relative">
                <img className="cursor-pointer transition ease-in-out hover:opacity-30 absolute object-fill opacity-50" src="/src/assets/img/Banner.jpg" alt="" />
                <h1 className="cursor-pointer absolute top-10 left-18 z-10 text-4xl text-d-brown">Welcome to VECIPES, where recipes are easy and vegan.</h1>
            </div>
        </Link>
        
     );
}
 
export default Banner;