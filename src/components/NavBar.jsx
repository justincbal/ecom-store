import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = (prop) => {
  return (
    <>
      <nav className="navBar">
        <ul className="list">
          <li className="list-item">
            <Link to="products">Shop All</Link>
          </li>
          <li className="list-logo">
            <Link to="/">FS</Link>
          </li>
          <li className="list-item">
            <a href="#">Cart ({prop.cartSize})</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
