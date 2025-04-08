import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const Header = () => {
    return ( 
        <header className="bg-butter flex flex-col">
            <div className="flex items-center justify-between px-5 py-8">
                <Logo/>
                <Nav/>
            </div>
            
        </header>
     );
}
 
export default Header;