import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import InfoProduct from "./pages/InfoProduct";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/InfoProduct" element={<InfoProduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
}

export default App;
