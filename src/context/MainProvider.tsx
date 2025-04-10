import { createContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { IRecipes } from "../contract/interfaces/IData";

// für den mainContext, damit der gute auch typisiert ist, weil muss so oder so
export interface RecipeContext {
  recipeData: IRecipes[];
  // Optional: setRecipeData?: (list: IRecipes[]) => void
}

export const mainContext = createContext<RecipeContext | undefined>(undefined);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  // useState hier
  const [recipeData, setRecipeData] = useState<IRecipes[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await supabase.from("recipes").select("*");
        // console.log(resp)
        if (resp.data) {
          setRecipeData(resp.data as IRecipes[]);
        }
      } catch (error) {
        console.warn(`Fetching Error: ${error}`); // Fehler korrekt ausgeben
      }
    };
    getData();
  }, []);

  // console.log(recipeData);

  return (
    <mainContext.Provider value={{ recipeData }}>
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
