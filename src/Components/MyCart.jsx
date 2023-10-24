import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    // Load the cart data using useLoaderData
    const carts = useLoaderData();

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error(`DELETE request failed with status ${res.status}`);
                        }
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success',
                            ).then(() => {
                                // Reload the page after the user confirms the deletion
                                location.reload();
                            });
                        }

                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // Handle the error as needed
                    });

            }

        })

    }


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
                                <button onClick={() => handleDelete(brand._id)} className="btn bg-red-600 text-white">Delete product</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MyCart;
