import "../css/NavBar.css";

const NavBar = (prop) => {
  return (
    <>
      <nav className="navBar">
        <h1 className="storeHead navItem">
          <a href="@">Fake Store</a>
        </h1>
        <ul className="list navItem">
          <li className="list-item">
            <a href="#">Shop All</a>
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
