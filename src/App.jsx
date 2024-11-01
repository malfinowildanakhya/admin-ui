import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ForgetPassword from "./pages/ForgetPassword";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage></DashboardPage>,
    },
    {
      path: "/login",
      element: <AuthPage></AuthPage>,
    },
    {
      path: "/register",
      element: <AuthPage></AuthPage>,
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
