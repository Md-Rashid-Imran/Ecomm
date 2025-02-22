import React,{lazy, Suspense} from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import App from "./App";
import Kids from "./components/Kids";
// import About from "./components/About";
import Men from "./components/Men";
import Women from "./components/Women";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import Skeleton from "./components/Skeleton";
import PostDetailSkeleton from "./components/PostDetailSkeleton";
// import Grocery from "./components/Grocery"; normal import naa karke ham lazy loading(aka code splitting, aka dynamic import) use karenge 

const About = lazy(() => import('./components/About'));
const Grocery = lazy(()=> import('./components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      { path: "/", element: <App /> },
      { path: "/kids", element: <Kids /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/product/:productId", element: <ProductDetails /> },
      { path: "/about", element:<Suspense fallback={<PostDetailSkeleton/>}><About/></Suspense>},
      { path: "/Grocery", element:<Suspense fallback={<Skeleton/>}><Grocery/></Suspense>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
