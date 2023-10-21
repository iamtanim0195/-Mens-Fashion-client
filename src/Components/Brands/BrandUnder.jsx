import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
const BrandUnder = () => {
    const brands = useLoaderData();
    const { brandName } = useParams();

    const matchingBrands = brands.filter((brand) => brand.brandName === brandName)
    console.log(matchingBrands);
    return (
        <div>
            <Slider/>
            {matchingBrands.length === 0 ? (
                <p className="text-4xl text-red-500 text-center">No brands matching {brandName} found</p>
            ) : (
                <div>
                    <h2>Brands matching {brandName}</h2>
                    <ul>
                        {matchingBrands.map((brand, index) => (
                            <li key={index}>
                                <h3>{brand.brandName}</h3>
                                <p>Category: {brand.category}</p>
                                <p>Price: {brand.price}</p>
                                {/* Add more information as needed */}
                            </li>
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