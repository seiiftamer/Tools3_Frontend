import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/signup";
import LoginPage from "./pages/login-page";
import Order from "./pages/create-order-page";
import { Home } from "./Home";
import Select from "./pages/order-page-button";
import Details from "./pages/order-details";
import Display from "./pages/order-display-page";

export const routes = createBrowserRouter([
    {
      path: "", //localhost:3000
      element: <Home />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          children: [
            {
              path: "/signup",
              element: <SignUp />,
            },
            {
              path: "/login" ,
              element: <LoginPage />,
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
          ],
        },
        
        {
          path: "*",
          element: <h1>error</h1>,
        },
      ],
    },
  ]);


