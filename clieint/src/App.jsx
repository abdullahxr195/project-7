import ProductList from "./components/Products/ProductsList.jsx";
import Toaster from "react-hot-toast";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LandingPage from "./page/Home/LandingPage.jsx";
import DisplayCategories from "./components/Category/Displaycategories.jsx";
import "./App.css";
import ViewProduct from "./components/Products/ViewProduct.jsx";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./page/Home/Home.jsx";
import AdminDashboard from "./components/Admin/Manage/AdminDashboard.jsx";
import ManageUsers from "./components/Admin/Manage/ManageUsers/ManageUsers.jsx";
import AdminLayout from "./components/Admin/Manage/AdminLayout.jsx";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/categories" element={<DisplayCategories />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store-home" element={<Home />} />
        <Route element={<AdminLayout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage/users" element={<ManageUsers />} /> */}
      </Routes>
    </>
  );
}

export default App;
