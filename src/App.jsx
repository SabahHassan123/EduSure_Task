import { Outlet } from "react-router-dom";
import NavBar from "./Components/navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
