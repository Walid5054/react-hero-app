import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Error from "../Components/Pages/Error";
import Home from "../Components/Pages/Home";
import Apps from "../Components/Pages/Apps";
import AppDetails from "../Components/Pages/AppDetails";
import MyInstallations from "../Components/Pages/MyInstallations";

const appsLoader = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: appsLoader,
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: appsLoader,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
        loader: appsLoader,
      },
      {
        path: "/installations",
        element: <MyInstallations />,
        loader: appsLoader,
      },
    ],
  },
]);

export default router;