import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import supabase from "../../utils/supabase";
import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";



interface INavProps{
    isLoggedIn : boolean,
    setIsLoggedIn : (value: boolean) => void
}

const Nav = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(mainContext) as INavProps
    const navigate = useNavigate()

    // funktion fürs ausloggen 
const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if (error) {
        console.warn("Logout wasn't", error)
    }else{
        navigate("/")
        setIsLoggedIn(false)
    }
}


    return ( 
    <nav className=" self-end text-sm flex gap-10 items-center justify-around sm:text-base lg:text-lg lg:gap-15">
        <div className="flex gap-2 items-end">
            <Button styling="transition ease-in-out hover:text-blue" text="Home" path="/"/>
            <Button styling="transition ease-in-out hover:text-blue" text="Recipes" path="/recipes"/>
            <Button styling="transition ease-in-out hover:text-blue" text="About" path="/about"/>

            {isLoggedIn ?(
                <Button styling="transition ease-in-out hover:text-blue" text="Create" path="/create"/>
            ): ""}
            
        </div>
        <div className="flex gap-2 items-center">

            {/* bei den Folgenden überprüfe ich den Loginstatus. Existiert der eingeloggte user, wird anstatt login logout angezeigt und ist verbunden mit der Funktion "logout", etc. */}
            {isLoggedIn ?(
                ""
            ): <Button styling="transisiton ease-in-out hover:text-blue" text="SignUp" path="/signup"/>}
            
            {isLoggedIn ?( 
                <button className="cursor-pointer hover:animate-pulse hover:text-blue" onClick={logout}>Logout</button>
            ): <Button styling="transisiton ease-in-out hover:text-blue" text="Login" path="/login"/> }
            
            {isLoggedIn ?(
                <Link to="/profile"> <img className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" src="/src/assets/img/user.png" alt="icon of a person" />
            </Link>
            ): "" }
            
        </div>
       

    </nav> );
}
 
export default Nav;