import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Components/AddProduct";
import MyCart from "../Components/MyCart";
import Register from "../Register/Register";
import Login from "../Login/Login";

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
                path: 'addProduct',
                element: <AddProduct />
            },
            {
                path: 'myCart',
                element: <MyCart />
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/registration",
                element: <Register/>
            }
        ]
    }
]);

export default MyRoute;