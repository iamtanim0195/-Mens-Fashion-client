import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import { Link } from 'react-router-dom';
const BrandUnder = () => {
    const brands = useLoaderData();
    const { brandName } = useParams();

    const matchingBrands = brands.filter((brand) => brand.brandName === brandName)

    return (
        <div>
            <Slider />
            {matchingBrands.length === 0 ? (
                <p className="text-4xl text-red-500 text-center">No brands matching {brandName} found</p>
            ) : (
                <div>
                    <ul className="md:grid md:grid-cols-2">
                        {matchingBrands.map((brand, index) => (
                            <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={brand.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">product Name: {brand.productName}</h2>
                                    <h2 className="card-title">brand Name: {brand.brandName}</h2>
                                    <h2 className="card-title">category: {brand.category}</h2>
                                    <h2 className="card-title">price: {brand.price}</h2>
                                    <h2 className="card-title">rating: {brand.rating}</h2>
                                    <div className="card-actions">
                                        <Link to={`/brand/${brand.brandName}/details/${brand._id}`}>
                                            <button className="btn btn-primary">Details button</button>
                                        </Link>
                                        <button className="btn btn-primary">Update button</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BrandUnder;
/* 
const brandUnder = useLoaderData();
const { productName, category, price, rating, shortDescription, brandName, image } = brandName;
 */