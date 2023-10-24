import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/productCard";
import Banner from "../../Components/Header/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Brands from "../../Components/Brands/Brands";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            <Banner />
            <Brands />
            <AboutUs />
            <ContactUs />
            <Footer />

        </div>
    )
}

export default Home;