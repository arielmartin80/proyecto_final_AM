import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar-logo">Shop</h1>
        </Link>
        <div className="navbar-links">
        <Link to="/admin" className="navbar-admin">
              Administración
        </Link>
        <Link to='/cart'>
          <h2 className="navbar-cart">🛒</h2>
        </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
