import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Recipes from "./pages/recipes/Recipes"
import About from "./pages/about/About"
import RecipeDetail from "./pages/recipeDetail/RecipeDetail"
import CreateRecipe from "./pages/createRecipe/CreateRecipe"
import NotFound from "./pages/notFound/NotFound"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details/:recipeParam" element={<RecipeDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
        
        
        <Route path="/create" element={ 
          <ProtectedRoute>
            <CreateRecipe/>
          </ProtectedRoute> }/>

        <Route path="/profile" element={ 
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute> }/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
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
