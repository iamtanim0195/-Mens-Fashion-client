import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Components/AddProduct";
import MyCart from "../Components/MyCart";
import Register from "../Register/Register";
import Login from "../Login/Login";
import BrandUnder from "../Components/Brands/BrandUnder";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/addProduct',
                element: <AddProduct />
            },
            {
                path: '/myCart',
                element: <MyCart />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Register />
            },
            {
                path: "/brand/:brandName",
                loader: ({params}) => fetch(`http://localhost:5000/product`),
                element: <BrandUnder />
            }

        ]
    }
]);

export default MyRoute;