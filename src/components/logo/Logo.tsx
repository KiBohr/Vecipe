import { Link } from "react-router-dom";

interface ILogoProps{
    img: string,
    imgW?:string,
    imgH?:string,
    text?: string,
}

const Logo = ({text,img,imgH,imgW}:ILogoProps) => {
    return ( 
        <Link to="/">
         <div className="flex items-center gap-4 justify-center cursor-pointer">
                <div className={`${imgW} ${imgH}`}>
                    <img className="object-cover w-full" src={img} alt="logo" />
                </div>
                <h1 className="text-lg uppercase tracking-wider self-end transistion ease-in-out hover:text-blue">{text}</h1>
            </div>
        </Link>
            
     );
}
 
export default Logo;