import { useContext, useEffect, useState } from "react";
import { IUser } from "../../pages/profile/Profile";
import { mainContext } from "../../context/MainProvider";
import supabase from "../../utils/supabase";
import { Navigate } from "react-router-dom";

interface IMainContext {
    user: IUser | null,
    setUser: (user: IUser) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (value: boolean) => void,
}


const ProtectedRoute = ({children}:{children: React.ReactNode}) => {
    
    const { isLoggedIn, setIsLoggedIn, setUser } = useContext(mainContext) as IMainContext

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const checkLoginStatus = async () => {
            const {data} = await supabase.auth.getUser()
            const user = data?.user
            //- !!user → negiert das nochmal → macht aus "truthy" einen echten true, aus "falsy" einen echten false.
            setIsLoggedIn(!!user)
            if (user) {
                setUser(user as unknown as IUser)
                console.log(user);
            }
            setLoading(false)
        }
        checkLoginStatus()
    }, [setIsLoggedIn, setUser])

    if (loading) {
        // hier noch loading animation einfügen
        return <div>Loading...</div>
    }
   

    return !isLoggedIn ? <Navigate to="/login" replace/> : children
}
 
export default ProtectedRoute;