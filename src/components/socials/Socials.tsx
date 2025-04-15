import { Link } from "react-router-dom";

interface ISocialsProps{
    imgPath: string,
    desc: string
    path?: string,
}

const Socials = ({imgPath, desc, path}:ISocialsProps) => {
    return ( 
        <Link to={path} className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 transistion ease-in-out hover:animate-pulse cursor-pointer"> 
            <img className="object-cover" src={imgPath} alt={desc} />
        </Link>
       
     );
}
 
export default Socials;