import Logo from "../logo/Logo";
import Socials from "../socials/Socials";

const Footer = () => {
    return ( 
        <footer className="bg-butter px-5 py-6 flex items-center justify-between lg:h-25 mt-auto">
           <Logo text=".Vecipes" img="/img/Tomate_b.png" imgH="h-8 lg:h-11" imgW="w-8 lg:w-11"/>
            <div className="flex gap-3 items-center justify-end">

               <Socials 
               imgPath="/img/I_brown.png" 
               desc="logo of instagram" 
               to="/notBaked"/>

               <Socials 
               imgPath="/img/T_brown.png" 
               desc="logo of tictoc" 
               to="/notBaked"/>

               <Socials 
               imgPath="/img/E_brown.png" 
               desc="logo of an at" 
               to="/notBaked"/>

               <Socials 
               imgPath="/img/L_brown.png" 
               desc="logo of LinkedIn" 
               to="https://www.linkedin.com/in/kiwi-b-3380bb352/"/>
               
            </div>
        </footer>
     );
}
 
export default Footer;