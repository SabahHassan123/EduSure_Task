import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/home";
import Courses from "./Components/courses";
import Login from "./Components/login";
import Cart from "./Components/cart";
import Admin from "./Components/admin";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "admin", element: <Admin /> },
    ],
  },
]);
