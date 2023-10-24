import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updateProduct = useLoaderData();
    console.log(updateProduct);
    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const productName = form.productName.value
        const brandName = form.brandName.value
        const image = form.image.value
        const category = form.category.value
        const price = form.price.value
        const rating = form.rating.value
        const shortDescription = form.shortDescription.value

        const updatedProduct = { productName, category, price, rating, shortDescription, brandName, image }

        fetch(`https://project-10-back-55gngcex5-tanims-projects-82b1e941.vercel.app/product/${updateProduct._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire('update successful !')
                }
            })

    };
    return (
        <div>
            <>
                <div className="mt-5 h-screen flex flex-col justify-center items-center">
                    <h2 className=" text-center text-2xl font-semibold">Update Product</h2>
                    <form onSubmit={handleUpdate} className="w-[80vw]">
                        <div className="flex flex-col md:flex-row gap-3 justify-between">
                            <div className="flex flex-col gap-3">
                                <div className="join">
                                    <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Image</p>
                                    <input
                                        name="image"
                                        type="text"
                                        className="w-full input input-bordered join-item"
                                        placeholder="Image URL"
                                        defaultValue={updateProduct?.image}
                                    />
                                </div>
                                <div className="join">
                                    <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Product name</p>
                                    <input
                                        name="productName"
                                        type="text"
                                        className="w-full input input-bordered join-item"
                                        placeholder="Product name"
                                        defaultValue={updateProduct?.productName}
                                    />
                                </div>
                                <div className="join">
                                    <p className=" btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Brand Name</p>
                                    <select
                                        name="brandName"
                                        defaultValue={updateProduct?.brandName}
                                        id="brandName"
                                        className=" w-full input input-bordered join-item"
                                    >
                                        <option value="brandName">Select Brand Name</option>
                                        <option value="Nike">Nike</option>
                                        <option value="Adidas">Adidas</option>
                                        <option value="Levis">Levis</option>
                                        <option value="H&M">H&M</option>
                                        <option value="Gucci">Gucci</option>
                                        <option value="Zara">Zara</option>

                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="join">
                                    <p className=" btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Category</p>
                                    <select
                                        name="category"
                                        defaultValue={updateProduct?.category}
                                        id="category"
                                        className=" w-full input input-bordered join-item"
                                    >
                                        <option value="Category">Select Category</option>
                                        <option value="Nike">shoe</option>
                                        <option value="Adidas">shirt</option>
                                        <option value="Levis">pants</option>
                                        <option value="H&M">T-Shirt</option>

                                    </select>
                                </div>
                                <div className="join">
                                    <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Price</p>
                                    <input
                                        name="price"
                                        defaultValue={updateProduct?.price}
                                        type="number"
                                        className="w-full input input-bordered join-item"
                                        placeholder="Enter the price"
                                    />
                                </div>
                                <div className="join">
                                    <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Rating</p>
                                    <input
                                        type="number"
                                        name="rating"
                                        defaultValue={updateProduct?.rating}
                                        step="1"
                                        min="0"
                                        max="5"
                                        className="w-full input input-bordered join-item"
                                        placeholder="Rating 1 to 5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="join flex flex-col gap-3 items-center justify-center mt-5">
                            <textarea
                                className="w-[45vw] border border-pink-600 text-center "
                                id="shortDescription"
                                name="shortDescription"
                                defaultValue={updateProduct?.shortDescription}
                                placeholder="Enter a short description"
                                rows="4"
                            ></textarea>
                            <button type="submit" className="btn bg-pink-600 text-white hover:bg-purple-600 join-item ">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </>
        </div>
    )
}

export default Update;