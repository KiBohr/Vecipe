import { Link } from "react-router-dom";

interface IButtonProps{
    path: string,
    text:string,
}

const Button = ({path,text}:IButtonProps) => {
    return ( 
       <Link className="transition ease-in-out hover:text-blue" to={path}>{text}</Link>
     );
}
 
export default Button;