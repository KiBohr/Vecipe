import Button from "../button/Button";

const Nav = () => {
    return ( 
    <nav className=" self-end text-sm flex gap-10 items-center justify-around">
        <div className="flex gap-2 items-end">
            <Button styling="transition ease-in-out hover:text-blue" text="Home" path="/"/>
            <Button styling="transition ease-in-out hover:text-blue" text="Recipes" path="/recipes"/>
            <Button styling="transition ease-in-out hover:text-blue" text="About" path="/about"/>
            <Button styling="transition ease-in-out hover:text-blue" text="Create" path="/create"/>
        </div>
        <Button text="Login" path="/notBaked"/>

    </nav> );
}
 
export default Nav;