import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/Admin-signup";
import Order from "./pages/create-order-page";
import { Home } from "./Home";
import Select from "./pages/order-page-button";
import Details from "./pages/order-details";
import Display from "./pages/order-display-page";
import UserSignUp from "./pages/User-signup";
import CourierSignUp from "./pages/Courier-signup";
import Adminlogin from "./pages/Admin-login";
import Userlogin from "./pages/User-login";
import Courierlogin from "./pages/Courier-login";
import CourierOrder from "./pages/Courier-order";
import Management from "./pages/Admin-manage-page";
import CourierDetailsPage from "./pages/Courier-details";

export const routes = createBrowserRouter([
    {
      path: "", //localhost:3000
      element: <Home/>,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          children: [
            {
              path: "/Adminsignup",
              element: <SignUp />,
            },
            {
              path: "/usersignUp" ,
              element: <UserSignUp/>,
            },
            {
              path: "/CourierSignUp" ,
              element: <CourierSignUp/>,
            },
            {
              path: "/Adminlogin" ,
              element: <Adminlogin />,
            },
            {
              path: "/Userlogin" ,
              element: <Userlogin/>,
            },
            {
              path: "/Courierlogin" ,
              element: < Courierlogin/>,
            },
            {
              path: "/adminDisplay" ,
              element: <Management/>,
            },
            {
              path: "/order" ,
              element: <Select />,
            },
            {
             path: "/createorder" ,
             element: <Order/>,
            },
            {
              path: "/display" ,
              element: <Display/>,
             },
            {
              path: "/vieworder" ,
              element: <Details/>,
            },
            {
              path: "/courierOrder" ,
              element: <CourierOrder/>,
            },
            {
              path: "/courierOrderDetails" ,
              element: <CourierDetailsPage/>,
            },
          ],
        },
        
        {
          path: "*",
          element: <h1>error</h1>,
        },
      ],
    },
  ]);


