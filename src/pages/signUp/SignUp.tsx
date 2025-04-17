import { useContext, useRef, useState } from "react";
import supabase from "../../utils/supabase";
import { IUser } from "../profile/Profile";
import { Link, useNavigate } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import Banner from "../../components/banner/Banner";

interface IUserProps {
    user: IUser,
    setUser: (value: IUser)=> void
    setIsLoggedIn : (value:boolean) => void
    isLoggedIn : boolean,
}

const SignUp = () => {
    const {user, setUser,setIsLoggedIn} = useContext(mainContext) as IUserProps

    // für das profilBild
    const [profileImg, setProfileImg] = useState<File | null>(null)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const firstnameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)


    const navigate = useNavigate()

    // - Funktion, zum Bildhochladen
    const uploadImg = async () => {
        if(!profileImg) return null

        const fileName = profileImg.name

        // das bild wird hochgeladen
        const {error} = await supabase.storage
        .from("profiles-img")
        .upload(fileName, profileImg)
        
        if(error){
            console.warn("Uploading picture isn´t working", error)
        }
        // bild wird in anderer Form abgespeichert
        const imgUrl = supabase.storage
        .from("profiles-img")
        .getPublicUrl(fileName)
        .data.publicUrl

        return imgUrl
    }


 const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(user)

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || ""
    const username = usernameRef.current?.value || ""
    const firstname = firstnameRef.current?.value || ""
    const lastname = lastnameRef.current?.value || ""

    console.log(email,password,username,firstname,lastname)

    // hier hole ich mir die imageUrl und speichere sie ab
    const uploadedImgUrl = await uploadImg()
    if(!uploadedImgUrl) return null
    console.log("uploadingImgUrl", uploadedImgUrl)

    if(user){
        setUser(
            {
             ...user,
            email: email,
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            img_url: uploadedImgUrl,
            }
        )
    }

    // console.log(user);

    
    try {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    img_url: uploadedImgUrl,
                }
            } 
        }) 
        if(error){
            console.error("Sign up hat nicht funktioniert",error);
        }else {
            console.log(data);
            setIsLoggedIn(true)
        }
        navigate("/profile")
        
    } catch (error) {
        console.error(error);
    }
    
    
    
}
return ( 
    <>
    <Banner img="https://i.pinimg.com/736x/c8/99/1b/c8991b66177b59ee0b8bb2cb8829f9a1.jpg" imgDesc="plate with food" text="SIGN UP"/>
<form onSubmit={handleSignUp} className="bg-white/70 mx-5 my-20 p-5 rounded-lg text-blue flex flex-col gap-2 ">
        
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <label htmlFor="email">Email</label>
                <input className="bg-lilac/50 rounded-lg p-1 text-d-blue text-sm" type="text" name="email"  ref={emailRef} />
            </div>

            <div className="flex gap-4 items-center">
                <label htmlFor="password">Password</label>
                <input className="bg-lilac/50 rounded-lg p-1 text-d-blue text-sm" type="text" name="password"  ref={passwordRef} />
            </div>
        </div>
        
        
        <div className="flex gap-4 items-center">
            <label htmlFor="username">Username</label>
            <input className="bg-lilac/50 rounded-lg p-1 text-d-blue text-sm" type="text" name="username"  ref={usernameRef} />
        </div>

        <div className="flex gap-4 items-center">
             <label htmlFor="firstname">First Name</label>
            <input className="bg-lilac/50 rounded-lg p-1 text-d-blue text-sm" type="text" name="firstname"  ref={firstnameRef} />
        </div>

        <div className="flex gap-4 items-center mb-5">
            <label htmlFor="lastname">Last Name</label>
            <input className="bg-lilac/50 rounded-lg p-1 text-d-blue text-sm" type="text" name="lastname"  ref={lastnameRef} />
        </div>

        <div>
            <label className="cursor-pointer transition ease-in-out hover:underline" htmlFor="file-upload">Add profilepicture</label>
            <input id="file-upload" className="hidden" type="file"  accept="image/*" onChange={(e)=> {
                if(e.target.files){
                    setProfileImg(e.target.files[0])
                }
            }} />
        </div>
        
        <div className=" flex gap-4 items-center justify-end ">
            <button className=" cursor-pointer border-2 px-2 py-[0.2rem] border-blue rounded-lg transition ease-in-out hover:opacity-50" type="submit">Register</button>
            <Link className="text-blue/70 text-sm transition ease-in-out hover:opacity-50" to="/login">You already have a profile?</Link>
        </div>
    </form>
    </>
 );
}
 
export default SignUp;