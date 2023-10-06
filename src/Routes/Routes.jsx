
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   children:[
    {
      path: "/",
      element: <Home></Home>,
      loader:()=>fetch('/place.json')
    },
    {
      path: "/card/:id",
      element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
      loader:()=>fetch('/place.json')
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Register></Register>
    },
   
    {
      path:"/profile",
      element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
    }
   ]
  },
]);

export default router;
