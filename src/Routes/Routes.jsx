import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/",
      //   element: <Navigate to="/home"></Navigate>,
      // },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
    ],
  },
]);

export default router;
