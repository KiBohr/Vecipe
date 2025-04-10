import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";


const NotFound = () => {
    return ( 
        <section className=" flex flex-col items-center bg-lilac/80 text-blue">
            <Banner img="https://cdn.connox.de/m/100107/817385/media/Klevering/2025-SS/klevering-Servierplatte-Tomate.jpg" imgDesc="a plate with a blue trim" text="Not Baked Yet"/>
            <div className="py-18 px-5 flex flex-col gap-2 items-center">
                <div className=" cursor-wait h-15 w-15 mb-5 transition ease-in-out hover:animate-spin">
                    <img src="/src/assets/img/Tomate-blue.png" alt="logo of a blue tomato" />
                </div>
                    <p className="text-lg text-center">Sorry, this page is not baked through yet.</p>
                    <p className="text-lg font-light mb-2">Please check on it later.</p>
                    <Link to="/">Back</Link>
                </div>
            
        </section>
     );
}
 
export default NotFound;