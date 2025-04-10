
interface IBannerProps{
    text: string | undefined,
    desc?: string | undefined,
    img: string | undefined,
    imgDesc: string | undefined,
}


const Banner = ({text, desc, img, imgDesc}:IBannerProps) => {
    return ( 
            <div className="w-full h-50 overflow-hidden relative">
                <img className="transition ease-in-out  absolute object-fill opacity-60" src={img} alt={imgDesc} />
                <h1 className="absolute top-5 left-10 z-10 text-4xl sm:left-18 sm:top-15 sm:text-4xl text-blue hover:text-d-blue">{text}</h1>
                <p className="absolute top-25 left-10 z-10 text-lg font-light sm:left-18 sm:top-15 sm:text-4xl text-blue">{desc}</p>
            </div>
     );
}
 
export default Banner;