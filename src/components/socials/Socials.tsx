import { useNavigate } from "react-router-dom";

interface ISocialsProps{
    imgPath: string,
    desc: string
    to: string
}

const Socials = ({imgPath, desc, to}:ISocialsProps) => {
    const navigate = useNavigate();
    
    return ( 
        <a
        onClick={() => navigate(to)} 
        className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 transistion ease-in-out hover:animate-pulse cursor-pointer">
            <img className="object-cover" src={imgPath} alt={desc} />
        </a>
       
       
     );
}
 
export default Socials;