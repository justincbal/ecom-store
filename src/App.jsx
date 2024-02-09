import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Purchase from "./components/Purchase";

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCartSize(cart.length);
  }, [cart]);

  return (
    <>
      <NavBar cartSize={cartSize} />
      <Outlet context={[cart, setCart]} />
      <Cart cartSize={cartSize} cart={cart} setCart={setCart} />
      <Purchase />
    </>
  );
}

export default App;
