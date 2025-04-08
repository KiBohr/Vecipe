// Anlegen von ÄndernButton in Detailseite --> weiterleitung an CreateSeite + Felder sollen die Inputs dann alle schon haben
// Anlegen von LöschButton in DetailSeite(useNavigate) --> löscht das Rezept--> path zu Recipes

// Checken ob die Daten aus den Refs ankommen --> console
// Funktion (handleSubmit), die die Inputs in ein Objekt überträgt --> form onsubmit(handleSubmit)
// navigate

import { useRef, useState } from "react";
import Button from "../../components/button/Button";
import supabase from "../../utils/supabase";

// typisierung für das state
interface INewRecipe {
    name: string,
    description: string,
    servings: number,
    instructions: string,
    categories: string,
    image: string,
}


const CreateRecipe = () => {

    const [newRecipe, setNewRecipe] = useState<INewRecipe>({
        name: "",
        description: "",
        servings: 0,
        instructions: "",
        categories: "",
        image: ""
    })
    
    // userefs, um die daten aus den inputs zu ziehen
    
    const nameRef = useRef<HTMLInputElement>(null)
    const desRef = useRef<HTMLInputElement>(null)
    const serRef = useRef<HTMLInputElement>(null)
    const instRef = useRef<HTMLInputElement>(null)
    const catRef = useRef<HTMLSelectElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)

    // funktion, um die Daten in die Tabelle zu pushen
    const createRecipe = async () => {
        const { error } = await supabase
    .from('recipes')
    .insert({ 
        name:"test",
        description: "test",
        servings: 2,
        instructions: "test",
        category_id:"404fe179-b3a3-4d77-a669-68965cf376c5",
        image:"https://i.pinimg.com/736x/39/48/c2/3948c27fa366435d3051e6ed5a49e815.jpg"
    })
    console.log("müsste jetzt was angekommen sein")
}


    return ( 
        <form action="">
                <div>
                    <label htmlFor="recipeName">Recipe name</label>
                    <input type="text" name="name" id="recipeName" ref={nameRef}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" ref={desRef} />
                </div>
                <div>
                    <label htmlFor="servings">Servings</label>
                    <input type="number" name="servings" id="servings" ref={serRef} />
                </div>
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <input type="text" name="instructions" id="instructions" ref={instRef} />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select name="category_id" id="category" ref={catRef}>
                        <option value=""></option>
                        <option value="2995757b-297b-46d0-81b4-3e6d85a6cb16">Salads</option>
                        <option value="29acd18c-c1aa-493a-8cab-9c94e9fcd46d">Breakfast</option>
                        <option value="404fe179-b3a3-4d77-a669-68965cf376c5">Appetizers</option>
                        <option value="5bbf3e59-3384-4601-bfca-6555314e1866">Souces and Condiments</option>
                        <option value="5ed3f4b0-54d8-4aaf-a55a-b768c3bf440e">Beverages</option>
                        <option value="837ee4d7-8ad1-447c-9546-04f8a4633d8f">Sides</option>
                        <option value="8c86d0b0-2af3-4000-a5f5-4943faaaed80">Soups</option>
                        <option value="a80e47d8-d395-4388-83a1-4523bcd59e05">Snacks</option>
                        <option value="e51a5475-ecd1-433d-8262-eb6878ad3a6d">Desserts</option>
                        <option value="ea91e7cf-c31b-49c6-8a7d-867e8c1502ee">Main Course</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="url" name="image" id="image" ref={(imgRef)} />
                </div>
                {/* soll onClick die Inputs in die Tabellen senden? */}
                {/* path muss wieder mit detailseite verbunden sein */}
                <button type="button" onClick={createRecipe}>push the button</button>
                {/* <Button  text="Save recipe"  path=""/> */}
            </form>

     );
}
 
export default CreateRecipe ;



