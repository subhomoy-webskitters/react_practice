// import {createContext} from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
// import Error from "./components/pages/Error";
// import ComA from "./components/contextApi/ComA";

// let FirstName = createContext();
// let LastName = createContext();
function App() {
  return (
    <>
      {/* <FirstName.Provider value={"Subhomoy"}>
        <LastName.Provider value={"Pal"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
// export {FirstName, LastName};
