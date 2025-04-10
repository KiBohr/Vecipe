import Banner from "../../components/banner/Banner";
import Button from "../../components/button/Button";


const NotFound = () => {
    return ( 
        <section className=" flex flex-col items-center bg-lilac/80 text-blue">
            <Banner img="https://cdn.connox.de/m/100107/817385/media/Klevering/2025-SS/klevering-Servierplatte-Tomate.jpg" imgDesc="a plate with a blue trim" text="Not Baked Yet"/>
            <div className="py-20 px-5 flex flex-col gap-2 items-center">
                <div className=" cursor-wait h-15 w-15 mb-5 transition ease-in-out hover:animate-spin">
                    <img src="/src/assets/img/Tomate-blue.png" alt="logo of a blue tomato" />
                </div>
                    <p className="text-lg text-center">Sorry, this page is not baked through yet.</p>
                    <p className="text-lg font-light mb-8">Please check on it later.</p>
                    <Button path="/" text="Back" styling="cursor-pointer bg-blue/50 text-lg border-2 border-d-blue rounded-lg px-8 py-1 text-d-blue transition ease-in-out hover:text-brown hover:border-brown" />
                </div>
            
        </section>
     );
}
 
export default NotFound;