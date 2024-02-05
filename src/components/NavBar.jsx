import "../css/NavBar.css";

const NavBar = (prop) => {
  return (
    <>
      <nav className="navBar">
        <ul className="list">
          <li className="list-item">
            <a href="#">Shop All</a>
          </li>
          <li className="list-logo">
            <a href="#">FS</a>
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
