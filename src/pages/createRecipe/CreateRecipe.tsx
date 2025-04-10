// Anlegen von ÄndernButton in Detailseite --> weiterleitung an CreateSeite + Felder sollen die Inputs dann alle schon haben
// Anlegen von LöschButton in DetailSeite(useNavigate) --> löscht das Rezept--> path zu Recipes

// Checken ob die Daten aus den Refs ankommen --> console
// Funktion (handleSubmit), die die Inputs in ein Objekt überträgt --> form onsubmit(handleSubmit)
// navigate

import {useEffect, useRef, useState } from "react";
import supabase from "../../utils/supabase";
import { IRecipes } from "../../contract/interfaces/IData";
import Banner from "../../components/banner/Banner";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
    ////UseStates
    const [values, setValues] = useState<IRecipes>({
        id: "",
        name: "",
        description: "",
        servings: 0,
        instructions: "",
        category_id: "",
        image: ""
    })

    // ? useNavigate
    const navigate = useNavigate()

    // //usestate für das Handlen, ob bereits input in den feldern ist oder nicht
    const [insert,setInsert] = useState(false)
    
    // userefs, um die daten aus den inputs zu ziehen
    const nameRef = useRef<HTMLInputElement>(null)
    const desRef = useRef<HTMLInputElement>(null)
    const serRef = useRef<HTMLInputElement>(null)
    const instRef = useRef<HTMLInputElement>(null)
    const catRef = useRef<HTMLSelectElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)

    
    //Funktion, um den Input aus den Refs zu speichern
    const safeRecipe = () =>{
        setValues({
            id: crypto.randomUUID(),
            name: nameRef.current?.value || "", 
            description: desRef.current?.value || "",
            servings: Number(serRef.current?.value) || 0,
            instructions: instRef.current?.value || "",
            category_id: catRef.current?.value || "",
            image: imgRef.current?.value || "",
        })
        setInsert(true)
    }

    // Funktion, die die InputDaten in das backend pusht
    const insertRecipe = async () => {
        const {error: insertError} = await supabase.from("recipes").insert({
            id: values.id, 
            name: values.name, 
            servings: values.servings, 
            description: values.description, 
            instructions: values.instructions, 
            category_id: values.category_id, 
            image: values.image})

        if(insertError){
            console.warn("Inserting Recipe isn`t working", insertError)
        }else{
            console.log("Recipe was successfully added")
            navigate(`/details/${values.id}`)
        }
    }

    useEffect(()=>{
        if (insert){
            console.log(values)
            insertRecipe()
            setInsert(false)
        }
    },[insert])

    return ( 
        <div>
            <Banner text="CREATE" img="https://i.pinimg.com/736x/94/79/4f/94794fa9362fe63be36b4237224e5a03.jpg" imgDesc="a picture of a plate with food on it"/>
         
            <form className="p-5 text-blue bg-white/50 m-5 flex flex-col gap-2 my-20" >
                        
                <div className="flex items-center gap-2">
                    <label htmlFor="recipeName">Recipe name</label>
                    <input className="bg-lilac/40 px-1 rounded-lg text-brown transition ease-in-out hover:bg-lilac/60" type="text" name="name" id="recipeName" ref={nameRef}/>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="description">Description</label>
                    <input className="bg-lilac/40 px-1 rounded-lg text-brown transition ease-in-out hover:bg-lilac/60" type="text" name="description" id="description" ref={desRef} />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="servings">Servings</label>
                    <input className="bg-lilac/40 px-1 rounded-lg text-brown transition ease-in-out hover:bg-lilac/60" type="number" name="servings" id="servings" ref={serRef} />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="instructions">Instructions</label>
                    <input className="bg-lilac/40 px-1 rounded-lg text-brown transition ease-in-out hover:bg-lilac/60" type="text" name="instructions" id="instructions" ref={instRef} />
                </div>
                <div className="flex items-center gap-2">
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
                <div className="flex items-center gap-2 mb-5">
                    <label htmlFor="image">Image</label>
                    <input className="bg-lilac/40 px-1 rounded-lg text-brown transition ease-in-out hover:bg-lilac/60" type="url" name="image" id="image" ref={(imgRef)} />
                </div>
                {/* soll onClick die Inputs in die Tabellen senden? */}
                {/* path muss wieder mit detailseite verbunden sein */}
                <button className="cursor-pointer border-2 border-blue rounded-lg transition ease-in-out hover:border-brown hover:text-brown" type="button" onClick={safeRecipe}>safe</button>
                
            </form>
        </div>
     );
}
 
export default CreateRecipe ;



