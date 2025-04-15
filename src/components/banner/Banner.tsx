
interface IBannerProps{
    text: string | undefined,
    desc?: string | undefined,
    img: string | undefined,
    imgDesc: string | undefined,
}


const Banner = ({text, desc, img, imgDesc}:IBannerProps) => {
    return ( 
            <div className=" flex items-center justify-start w-screen h-50 overflow-hidden relative md:h-70 lg:h-100">
                <img className=" self-start lg:self-center transition ease-in-out absolute object-cover opacity-60 w-full" src={img} alt={imgDesc} />
                <div className="px-10 md:px-20 flex flex-col gap-3 items-start justify-center">
                    <h1 className=" z-10 text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-blue hover:text-d-blue">{text}</h1>
                    <p className="  z-10 text-lg font-light sm:text-2xl lg:text-3xl text-blue">{desc}</p>
                </div>
            </div>
     );
}
 
export default Banner;