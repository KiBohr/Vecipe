import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";
import Banner from "../../components/banner/Banner";

const Login = () => {

    []
   
    // zum direkten navigieren zum profil
    const navigate = useNavigate()
    //  um die daten aus den inputfeldern zu holen
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const email = emailRef.current?.value || ""
   const password = passwordRef.current?.value || ""

   
   try{
    const {error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    console.warn(error)
    navigate("/profile")
   } catch(error) {
    console.warn(error)
   }}

   return ( 
    <section>
        <Banner img="https://i.pinimg.com/736x/99/d7/6d/99d76d535fec9857c4c8feeaea8ee5ce.jpg" text="LOGIN" imgDesc="plate with tofu and vegetables"/>

        <form onSubmit={handleLogin} className="text-blue bg-white/70 mx-5 my-20 p-5 rounded-lg flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <label htmlFor="email">Email</label>
                <input className=" animate-pulse bg-lilac/50 p-1 rounded-lg text-d-blue text-sm" type="text" name="email"  ref={emailRef} />
            </div>

            <div className="flex gap-2 items-center">
                <label htmlFor="password">Password</label>
                <input className=" animate-pulse bg-lilac/50 p-1 rounded-lg text-d-blue text-sm" type="text" name="password"  ref={passwordRef} />
            </div>
        
            <button className="cursor-pointer border-2 border-blue rounded-lg transition ease-in-out hover:border-brown hover:text-brown" type="submit">Login</button>
        </form>

    </section>
    
    );
}
 
export default Login;