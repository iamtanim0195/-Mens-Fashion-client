import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    // Load the cart data using useLoaderData
    const carts = useLoaderData();

    // Check if the cart data is not available or not an array
    if (!carts || !Array.isArray(carts) || carts.length === 0) {
        return <div>Your cart is empty.</div>;
    }

    return (
        <div>
            <h1 className="text-4xl text-center">My Cart</h1>
            <ul className="md:grid md:grid-cols-2">
                {carts.map((brand, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={brand.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">product Name: {brand.productName}</h2>
                            <h2 className="card-title">brand Name: {brand.brandName}</h2>
                            <h2 className="card-title">category: {brand.category}</h2>
                            <h2 className="card-title">price: {brand.price}</h2>
                            <h2 className="card-title">rating: {brand.rating}</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">Delete product</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MyCart;
