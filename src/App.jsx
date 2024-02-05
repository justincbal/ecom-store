import { useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [cartSize, setCartSize] = useState(0);
  

  return (
    <>
      <NavBar cartSize={cartSize} />
      <Outlet />
    </>
  );
}

export default App;
