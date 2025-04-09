// import { useEffect, useState } from "react";
// import supabase from "../../utils/supabase";

// interface IUser{
//     id: number,
//     username:string,
//     firstname: string,
//     lastname: string,
//     email: string,
// }

// const Profile = () => {

//     const [user, setUser] = useState<IUser | null>(null)
//     const [editing, setEditing] = useState<boolean>(false)
//     const [newUserName, setNewUserName] = useState(false)

//     const fetchData = async () => {
//         const {data : profile, error} = await supabase.from("customers").select("*").eq("id",2)

//         if(error){
//             console.warn("fetch has issues", error)
//         }

//         setUser(profile?.[0] || null)
//     }

//     // damit kein loop entsteht
//     useEffect(() => {
//         fetchData()
//     },[])

//     const handleDoubleClick(() => {

//     })

//     return ( 
//         <>
//         {user && (
//             <div>
//                 <h2>Profile</h2>
//                 <div onDoubleClick={hanndleDoubleClick}></div>
//                 {
//                     editing ?()
//                     <input
//                     type="text" placeholder="change your username" value={newUserName} onChange={(e)=> setNewUserName(e.target.value)}/>
//                     <p>{user.username</p>
//                 }

//             </div>
//         ) 
//         }
        
//         </>
//      );
// }
 
// export default Profile;