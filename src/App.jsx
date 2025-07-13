import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Context/Context.jsx";
import CartContent from "./Components/CartContent/CartContent.jsx";
import Login from "./Components/Login/Login.jsx";

function App() {

  return (
    <ContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/cart" element={<CartContent />} />
      </Routes>
      <Footer/>
    </Router>
   </ContextProvider>
  )
}

export default App
