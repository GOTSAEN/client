import { createBrowserRouter } from "react-router-dom";
import NotFound from "@pages/NotFound";
import Home from "@pages/Home";
import App from "@/App";
import ProductDetail from "@/pages/ProductDetail";
import ProductEnroll from "@/pages/ProductEnroll";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, path: "/", element: <Home /> },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/product/create",
          element: <ProductEnroll />,
        },
        { path: "/login", element: <LogIn /> },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ],
  {
    basename: "/client",
  }
);
