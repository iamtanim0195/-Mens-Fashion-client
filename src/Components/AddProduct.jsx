import toast from "react-hot-toast";

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;

        const productName = form.productName.value
        const brandName = form.brandName.value
        const image = form.image.value
        const category = form.category.value
        const price = form.price.value
        const rating = form.rating.value
        const shortDescription = form.shortDescription.value

        const newProduct = { productName, category, price, rating, shortDescription, brandName, image }
        console.log(newProduct)

        // send data to server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('product added successfully')
                }
            });


    }

    return (
        <>
            <div className="mt-5 h-screen flex flex-col justify-center items-center">
                <h2 className=" text-center text-2xl font-semibold">Add Product</h2>
                <form onSubmit={handleAddProduct} className="w-[80vw]">
                    <div className="flex flex-col md:flex-row gap-3 justify-between">
                        <div className="flex flex-col gap-3">
                            <div className="join">
                                <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Image</p>
                                <input
                                    name="image"
                                    type="text"
                                    className="w-full input input-bordered join-item"
                                    placeholder="Image URL"
                                />
                            </div>
                            <div className="join">
                                <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Product name</p>
                                <input
                                    name="productName"
                                    type="text"
                                    className="w-full input input-bordered join-item"
                                    placeholder="Product name"
                                />
                            </div>
                            <div className="join">
                                <p className="btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Brand name</p>
                                <input
                                    name="brandName"
                                    type="text"
                                    className="w-full input input-bordered join-item"
                                    placeholder="Brand name"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="join">
                                <p className=" btn bg-pink-600 text-white hover:bg-purple-600 join-item rounded-r-full">Category</p>
                                <select
                                    name="category"
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
    );
};

export default AddProduct;
