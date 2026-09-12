
import ProductList from "./components/Products/ProductsList.jsx"
import Toaster from "react-hot-toast"
import {BrowserRouter,Route,Router,Routes} from "react-router-dom"
import LandingPage from "./page/Home/LandingPage.jsx"
import DisplayCategories from "./components/Category/Displaycategories.jsx"
import './App.css'
import ViewProduct from "./components/Products/ViewProduct.jsx"




function App() {

  return (
    <>
     <Toaster/>

     <Routes>
      <Route path="/" element={<LandingPage/>}/>
       <Route path="/categories" element={<DisplayCategories/>}/> 
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ViewProduct/>}/>
     </Routes>
     
    </>
  )
}

export default App
