import Logo from "../logo/Logo";
import Socials from "../socials/Socials";

const Footer = () => {
    return ( 
        <footer className="bg-butter px-5 py-6 flex items-center justify-between lg:h-25 mt-auto">
           <Logo text=".Vecipes" img="/src/assets/img/Tomate_b.png" imgH="h-8 lg:h-11" imgW="w-8 lg:w-11"/>
            <div className="flex gap-3 items-center justify-end">
               <Socials imgPath="/src/assets/img/I_brown.png" desc="logo of instagram" path="/notBaked"/>
               <Socials imgPath="/src/assets/img/T_brown.png" desc="logo of tictoc" path="/notBaked"/>
               <Socials imgPath="/src/assets/img/E_brown.png" desc="logo of an at" path="/notBaked"/>
               <Socials imgPath="/src/assets/img/L_brown.png" desc="logo of LinkedIn" path="https://www.linkedin.com/in/kiwi-b-3380bb352/"/>
               
            </div>
        </footer>
     );
}
 
export default Footer;