interface ISocialsProps{
    path: string,
    desc: string
    link?: string,
}

const Socials = ({path, desc, link}:ISocialsProps) => {
    return ( 
        <a className="h-3 w-3 transistion ease-in-out hover:animate-pulse cursor-pointer" href={link}>
            <img className="object-cover" src={path} alt={desc} />
        </a>  
     );
}
 
export default Socials;