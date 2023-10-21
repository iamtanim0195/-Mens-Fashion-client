import { useLoaderData, useParams } from "react-router-dom";
const BrandUnder = () => {
    const brands = useLoaderData();
    const { brandName } = useParams();

    const matchingBrands = brands.filter((brand) => brand.brandName === brandName)
    console.log(matchingBrands);
    return (
        <div>
            {matchingBrands.length}
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
    )
}

export default BrandUnder;
/* 
const brandUnder = useLoaderData();
const { productName, category, price, rating, shortDescription, brandName, image } = brandName;
 */