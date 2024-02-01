import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [cartSize, setCartSize] = useState(0);
  return (
    <>
      <NavBar cartSize={cartSize}/>
    </>
  );
}

export default App;
