import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Recipes from "./pages/recipes/Recipes"
import About from "./pages/about/About"
import RecipeDetail from "./pages/recipeDetail/RecipeDetail"
import CreateRecipe from "./pages/createRecipe/CreateRecipe"
import NotFound from "./pages/notFound/NotFound"


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details/:recipeParam" element={<RecipeDetail/>}/>
        <Route path="/create" element={<CreateRecipe/>}/>
        <Route path="/notBaked" element={<NotFound/>}/>
        {/* <Route path="/profile" element={<Profile/>}/> */}
      </Route>
    )
  )

  return (
    <main className="text-d-brown font-[Outfit] bg-bg">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
