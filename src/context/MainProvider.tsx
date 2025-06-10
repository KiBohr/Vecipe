import { createContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { IRecipes } from "../contract/interfaces/IData";
import { IUser} from "../pages/profile/Profile";


// für den mainContext, damit der gute auch typisiert ist, weil muss so oder so
export interface RecipeContext {
  recipeData: IRecipes[] | null,
  user: IUser | undefined,
  setUser: (value: IUser) => void,
  isLoggedIn : boolean,
  setIsLoggedIn : (value: boolean) => void,
  loading : boolean,
  setLoading: (value: boolean) => void,
}


export const mainContext = createContext<RecipeContext| undefined >(undefined);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  // useState hier
  const [recipeData, setRecipeData] = useState<IRecipes[] | null>(null);

  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)


  // der state für profil --> login
  const [user, setUser] = useState<IUser>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await supabase.from("recipes").select("*");
        // console.log(resp)
        if (resp.data) {
          setRecipeData(resp.data as IRecipes[]);
          setLoading(false)
        }
      } catch (error) {
        console.warn(`Fetching Error: ${error}`); // Fehler korrekt ausgeben
      }finally{
        setLoading(false)
      }
    };
    getData();
  }, []);

  
  // console.log(recipeData);

  return (
    <mainContext.Provider value={{ recipeData, user, setUser, isLoggedIn, setIsLoggedIn, loading, setLoading }}>
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
