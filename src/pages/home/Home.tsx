import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";


const Home = () => {
    return ( 
        <>
        {/* hier noch ein fetch für die favourite dishes! */}
        <Banner/>
        <Link className="p-10  text-3xl text-blue" to="/recipes">Find your new favourite Dish</Link>
        {/* <FavouriteRecipes/> */}

        </>
     );
}
 
export default Home;