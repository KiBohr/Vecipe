import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import NotFound from "../notFound/NotFound";
import Banner from "../../components/banner/Banner";

export interface IUser {
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string
    email: string
}

const Profile = () => {

    // usestates
    const [profile, setProfile] = useState<IUser | null>()
    const [isEditing,setIsEditing] = useState<boolean>(false)
    const [newUsername, setNewUsername] = useState<string>("") 

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
    },[])

    function handleDoubleClick(){
        if(profile){
            setNewUsername(profile.username)
            setIsEditing(true)
        }
    }

    async function handleSave(){
        if(profile && newUsername != profile.username){
            const {data: user} = await supabase.auth.getUser()

            const {error} = await supabase.from("profiles").update({username : newUsername}).eq("id", user?.user?.id)
            if(error){
                console.error("Saving didn´t work", error)
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
                <div className="flex flex-col gap-2 mx-5 mt-10 mb-30 p-5 rounded-lg bg-white/50 justify-center">
                <div className="flex gap-1 items-center" onDoubleClick={handleDoubleClick}>
                    <p className="text-xl">Username:</p>
                    {
                       isEditing ? (
                       <input 
                       type="text"
                       placeholder='change your username'
                       value={newUsername}
                       onChange={(e)=> setNewUsername(e.target.value)}
                       /> ) : (
                       <p className="text-xl font-light">
                        {profile.username}
                       </p>
                       )
                    }
                </div>
                <p className="text-lg">Firstname: {profile.firstname}</p>
                <p className="text-lg">Lastname: {profile.lastname}</p>

                
                </div>
                
                {isEditing &&
                    <button onClick={handleSave}>save</button>
                }
               
            </div>
            
        ) : <NotFound/>}
            
        </div>
     );
}
 
export default Profile;