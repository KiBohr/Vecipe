import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const Header = () => {
    return ( 
        <header className="bg-butter flex flex-col h-[12vh] justify-center lg:h-25">
            <div className="flex items-center justify-between px-5 py-7">
                <Logo img="/public/img/Tomate_b.png" imgH="h-9 lg:h-12" imgW="w-9 lg:w-12" />
                <Nav/>
            </div>
            
        </header>
     );
}
 
export default Header;