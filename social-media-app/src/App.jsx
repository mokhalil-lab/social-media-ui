import "./app.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Leftbar from "../src/componenets/leftbar/Leftbar";
import Rightbar from "../src/componenets/rightbar/Rightbar";
import Navbar from "../src/componenets/navbar/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  const currentuser = false;
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  const Protectedroute = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protectedroute>
          <Layout />
        </Protectedroute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
