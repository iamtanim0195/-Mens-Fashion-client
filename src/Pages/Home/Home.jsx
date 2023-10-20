import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/productCard";

const Home = () => {

    const products = useLoaderData();

    return (
        <div>
            <h1>{products.length}</h1>
            {
                products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    )
}

export default Home;