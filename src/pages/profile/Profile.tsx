import {useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import Banner from "../../components/banner/Banner";
import Loading from "../../components/loading/Loading";

export interface IUser {
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string
    email: string,
    img_url: string | null | undefined,
}

const Profile = () => {

    // usestates
    const [profile, setProfile] = useState<IUser | null>()
    const [isEditing,setIsEditing] = useState<boolean>(false)
    const [newUsername, setNewUsername] = useState<string>("")
    const [newFirstName, setNewFirsttName] = useState<string>("")
    const [newLastName, setNewLastName] = useState<string>("")
    const [newEmail, setNewEmail] = useState<string>("")

    const fetchProfileData = async () => {
        const {data: profileData} = await supabase.auth.getUser()

        const {data: profile, error} = await supabase.from("profiles").select("*").eq("id", profileData?.user?.id)

        if(error){
            console.warn("Profile Fetch isn`t working", error)
        }else{
            setProfile(profile?.[0] || null)
        }
        // console.log(profile?.[0])
    }

    useEffect(() => {
        fetchProfileData()
    },[handleDoubleClick])

    function handleDoubleClick(){
        if(profile){
            setNewUsername(profile.username)
            // setNewFirsttName(profile.firstname)
            // setNewLastName(profile.lastname)
            setNewEmail(profile.email)

            setIsEditing(true)
        }
    }

    async function handleSave(){
        if(profile && newUsername != profile.username){
            const {data: user} = await supabase.auth.getUser()
            // abfrage für username
            const {error: usernameError} = await supabase.from("profiles").update({username : newUsername}).eq("id", user?.user?.id)
            
            if(user){
                console.error("Saving username didn´t work", usernameError)
            }else{
                fetchProfileData()
            }
       
    }
    if(profile && newEmail != profile.email){
        const {data: user} = await supabase.auth.getUser()
        // abfrage für username
        // abfrage für email
        const {error: emailError} = await supabase.from("profiles").update({email: newEmail}).eq("id", user?.user?.id)
        
        if(user){
            console.error("Saving email didn´t work", emailError)
        }else{
            fetchProfileData()
        }
    }
    setIsEditing(false)
}

    
    return ( 
        <div className="text-blue">
            {profile ? (
            <div>
                <Banner img="https://i.pinimg.com/736x/b7/d4/c9/b7d4c9dcfe092824c12d78368b77ff17.jpg" imgDesc="different vegetables on a white surface" text="Profile"/>
                <div className="flex flex-col gap-2 mx-5 mt-10 mb-30 p-5 rounded-lg bg-white/50 items-center justify-center">

                <div className="h-40 w-40">
                    {/* The src prop for <img> expects only string | undefined (not null).
                    Using ?? undefined ensures that null is converted to undefined, resolving the TypeScript error. */}
                         <img className="rounded-full transition ease-in-out hover:opacity-75 cursor-pointer" src={profile.img_url ?? undefined} alt="" />
                    </div>
                <div className="flex gap-1 items-center" onDoubleClick={handleDoubleClick}>
                    
                    <p className="text-xl">Username:</p>
                    {
                       isEditing ? (
                       <input className=""
                       type="text"
                       placeholder='change your username'
                       value={newUsername}
                       onChange={(e)=> setNewUsername(e.target.value)}
                       /> ) : (
                       <p className="text-2xl font-light text-blue/70 transition ease-in-out hover:opacity-50 hover:bg-lilac/40 hover:rounded-lg hover:px-1">
                        {profile.username}
                       </p>
                       )
                    }
                </div>
                <div className="flex gap-5 items-center">
                    <div className="flex gap-2 items-center">
                        <p>firstname:</p>
                          <p className="text-lg text-blue/60">{profile.firstname}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <p>lastname:</p>
                        <p className="text-lg text-blue/60">{profile.lastname}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center" onDoubleClick={handleDoubleClick}>
                <p className="text-lg">email:</p>
                    {
                       isEditing ? (
                       <input 
                       type="text"
                       placeholder='change your email'
                       value={newEmail}
                       onChange={(e)=> setNewEmail(e.target.value)}
                       /> ) : (
                       <p className="text-xl font-light text-blue/70 transition ease-in-out hover:opacity-50 hover:bg-lilac/40 hover:rounded-lg hover:px-1">
                        {profile.email}
                       </p>
                       )
}
                    
                    {/* // <p>email:</p>
                    // <p className="text-lg text-blue/60">{profile.email}</p> */}
                </div>

                {isEditing &&
                    <button className=" cursor-pointer self-center text-xl border-2 px-3 text-center rounded-lg transition ease-in-out hover:text-brown/70 hover:border-brown/70" onClick={handleSave}>save</button>
                }

                
                </div>
                
                
               
            </div>
            
        ) : <Loading/>}
            
        </div>
     );
}
 
export default Profile;