import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    setCartSize(cart.length);
  }, [cart])
  
  return (
    <>
      <NavBar cartSize={cartSize} />
      <Outlet context={[cart, setCart]}/>
      <Cart cartSize={cartSize} cart={cart}/>
    </>
  );
}

export default App;
