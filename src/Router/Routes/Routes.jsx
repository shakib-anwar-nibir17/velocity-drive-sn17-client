import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import BrandDetails from "../../Pages/Brands/BrandDetails";
import ProductDetails from "../../Pages/Products/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/brands/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.id}`),
      },
      {
        path: "/add_products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/products/:_id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params._id}`),
      },
    ],
  },
]);

export default routes;
