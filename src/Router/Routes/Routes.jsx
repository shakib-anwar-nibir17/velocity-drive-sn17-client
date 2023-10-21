import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import BrandDetails from "../../Pages/Brands/BrandDetails";
import ProductDetails from "../../Pages/Products/ProductDetails";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import UpdateProducts from "../../Pages/UpdateProducts/UpdateProducts";
import MyCart from "../../Pages/MyCart/MyCart";
import PrivateRoute from "../Private/PrivateRoute";
import LearnMore from "../../Pages/Shared/LearnMore/LearnMore";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://velocity-drive-server-mb4xboy83-shakib-nibirs-projects.vercel.app/brands"
          ),
      },
      {
        path: "/brands/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(
            `https://velocity-drive-server-mb4xboy83-shakib-nibirs-projects.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/add_products",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/update_products/:_id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://velocity-drive-server-mb4xboy83-shakib-nibirs-projects.vercel.app/products/${params._id}`
          ),
      },
      {
        path: "/products/:_id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://velocity-drive-server-mb4xboy83-shakib-nibirs-projects.vercel.app/products/${params._id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/learn_more",
        element: <LearnMore></LearnMore>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
