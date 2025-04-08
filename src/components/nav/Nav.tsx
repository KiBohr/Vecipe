import Button from "../button/Button";

const Nav = () => {
    return ( 
    <nav className="flex gap-10 items-center justify-around">
        <div className="flex gap-3 items-end">
            <Button text="Home" path="/"/>
            <Button text="Recipes" path="/recipes"/>
            <Button text="About" path="/about"/>
            <Button text="Create" path="/create"/>
        </div>
        <Button text="Login" path=""/>

    </nav> );
}
 
export default Nav;