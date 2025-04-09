import Logo from "../logo/Logo";
import Socials from "../socials/Socials";

const Footer = () => {
    return ( 
        <footer className="bg-butter px-5 py-6 flex items-center justify-between">
           <Logo text=".Vecipes" img="/src/assets/img/Tomate_b.png"/>
            <div className="flex gap-3 items-center justify-end">
               <Socials path="/src/assets/img/I_brown.png" desc="logo of instagram"/>
               <Socials path="/src/assets/img/T_brown.png" desc="logo of tictoc"/>
               <Socials path="/src/assets/img/E_brown.png" desc="logo of an at"/>
               <Socials path="/src/assets/img/L_brown.png" desc="logo of LinkedIn" link="https://www.linkedin.com/in/kiwi-b-3380bb352/"/>
               
            </div>
        </footer>
     );
}
 
export default Footer;