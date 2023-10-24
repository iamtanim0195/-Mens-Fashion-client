import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Components/AddProduct";
import MyCart from "../Components/MyCart";
import Register from "../Register/Register";
import Login from "../Login/Login";
import BrandUnder from "../Components/Brands/BrandUnder";
import BrandDetails from "../Components/Brands/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import Update from "../Components/Brands/Update";
import ErrorPage from "../Components/ErrPage";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/product')
                
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart /></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/cart`)
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
                loader: ({ params }) => fetch(`http://localhost:5000/product`),
                element: <BrandUnder />
            },
            {
                path: "/brand/:brandName/details/:_id",
                loader: ({ params }) => fetch(`http://localhost:5000/product`),
                element: <PrivateRoute><BrandDetails /></PrivateRoute>
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><Update /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            }

        ]
    }
]);

export default MyRoute;