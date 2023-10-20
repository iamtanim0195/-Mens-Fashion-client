import { useEffect, useState } from 'react';

function Brands() {
    const [brandData, setBrandData] = useState(null);

    useEffect(() => {
        // Use fetch to load the JSON data
        fetch('/brand.json')
            .then((response) => response.json())
            .then((data) => setBrandData(data))
            .catch((error) => console.error('Error fetching brand data:', error));
    }, []);

    return (
        <div >
            {brandData ? (
                <div className='flex p-5 gap-3'>
                    {brandData.map((brand, index) => (
                        <div key={index} >
                            <img className="w-96 h-28" src={brand.brandImage} alt={brand.brandName} />
                            <h3 className="text-3xl">{brand.brandName}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading brand data...</p>
            )}
            {/* Render your component content here */}
        </div>
    );
}

export default Brands;
