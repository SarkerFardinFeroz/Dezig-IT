import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Pricings from "../pages/Pricing/Pricings";
import AboutUs from "../pages/About/AboutUs";
import ContactUs from "../pages/Contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: < Services/>,
      },
      {
        path: "/pricing",
        element: <Pricings />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
export default router;
