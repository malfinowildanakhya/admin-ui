import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword></ForgetPassword>,
    },
  ]);

  return (
      <RouterProvider router={myRouter} />

  );
};

export default App;
