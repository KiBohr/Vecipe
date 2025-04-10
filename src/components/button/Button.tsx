import { Link } from "react-router-dom";

interface IButtonProps{
    path: string,
    text:string,
    styling?: string,
}

const Button = ({path,text,styling}:IButtonProps) => {
    return ( 
       <Link className={styling} to={path}>{text}</Link>
     );
}
 
export default Button;