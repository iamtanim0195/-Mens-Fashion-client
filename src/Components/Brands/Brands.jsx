import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                <div className='flex p-5 gap-3 '>
                    {brandData.map((brand, index) => (

                        <div key={index} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' >
                            <Link to={`/brand/${brand.brandName}`}>
                                <img className="w-96 h-28" src={brand.brandImage} alt={brand.brandName} />
                                <h3 className="text-3xl">{brand.brandName}</h3>
                            </Link>
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
