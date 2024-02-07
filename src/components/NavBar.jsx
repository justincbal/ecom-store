import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = (prop) => {
  const handleClick = () => {
    const cart = document.querySelector('.cartArea');
    cart.classList.add('cartComeIn');
    cart.classList.remove('cartComeOut');
  }
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
            <a href="#" onClick={handleClick}>Cart ({prop.cartSize})</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
