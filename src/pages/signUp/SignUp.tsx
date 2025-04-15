import { useContext, useRef } from "react";
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
    const {user, setUser,setIsLoggedIn, isLoggedIn} = useContext(mainContext) as IUserProps

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const firstnameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)


    const navigate = useNavigate()


 const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || ""
    const username = usernameRef.current?.value || ""
    const firstname = firstnameRef.current?.value || ""
    const lastname = lastnameRef.current?.value || ""


    if(user){
        setUser(
            {
             ...user,
            email: email,
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname
            }
        )
    }

    console.log(user);

    try {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    email: email
                }
            } 
        }) 
        if(error){
            console.error("Sign up hat nicht funktioniert",error);
        }else {
            console.log(data);
            navigate("/profile")
            setIsLoggedIn(true)
        }
        
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
        
        <div className="flex gap-4 items-center justify-end ">
            <button className=" cursor-pointer border-2 px-2 py-[0.2rem] border-blue rounded-lg transition ease-in-out hover:opacity-50" type="submit">Register</button>
            <Link className="text-blue/70 text-sm transition ease-in-out hover:opacity-50" to="/login">You already have a profile?</Link>
        </div>
    </form>
    </>
 );
}
 
export default SignUp;