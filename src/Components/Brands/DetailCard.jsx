import toast from "react-hot-toast";

const DetailCard = ({ detail }) => {
    const { productName, category, price, rating, shortDescription, brandName, image } = detail || {};

    const handleUpdate = () => {
        fetch(`https://project-10-back-55gngcex5-tanims-projects-82b1e941.vercel.app/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/Json' },
            body: JSON.stringify(detail)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully add to cart!')
            })
    };

    return (
        <div>

            <div className="relative flex  mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" w-[40vw] relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="w-full"
                        src={image}
                        alt={productName}
                    />
                </div>
                <div className="p-6">
                    <h2 className="card-title">product Name: {productName}</h2>
                    <h2 className="card-title">brand Name: {brandName}</h2>
                    <h2 className="card-title">category: {category}</h2>
                    <h2 className="card-title">price: {price}</h2>
                    <h2 className="card-title">rating: {rating}</h2>
                    <h2 className="card-title">short Description: {shortDescription}</h2>

                    <button onClick={handleUpdate} className="btn btn-primary">Add to Cart</button>

                </div>
            </div>

        </div>
    )
}

export default DetailCard;