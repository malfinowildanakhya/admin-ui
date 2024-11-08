import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import SignInPage from "./pages/Login";
import SignUpPage from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ErrorRoute from "./pages/ErrorRoute";
import DashboardPage from "./pages/DashboardPage";
import BalancePage from "./pages/Balance";
import GoalPage from "./pages/GoalPage";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute />, 
    },
    {
      path: "/login",
      element: <AuthPage/>
    },
    {
      path: "/register",
      element: <AuthPage/>
    },
    {
      path: "/forget-password",
      element: <ForgetPassword/>,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/goal",
      element: <GoalPage/>,
    },
  ]);

  return (
      <RouterProvider router={myRouter} />

  );
};

export default App;
