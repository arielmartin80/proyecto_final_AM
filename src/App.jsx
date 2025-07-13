import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import ContextProvider from "./Context/Context";
import CartContent from "./Components/CartContent/CartContent";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin"

function App() {

  return (
    <ContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<CartContent />} />
      </Routes>
      <Footer/>
    </Router>
   </ContextProvider>
  )
}

export default App
