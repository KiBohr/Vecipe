import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const Header = () => {
    return ( 
        <header className="bg-butter flex flex-col">
            <div className="flex items-center justify-between px-5 py-7">
                <Logo img="/src/assets/img/Tomate_b.png" imgH="9" imgW="9"/>
                <Nav/>
            </div>
            
        </header>
     );
}
 
export default Header;