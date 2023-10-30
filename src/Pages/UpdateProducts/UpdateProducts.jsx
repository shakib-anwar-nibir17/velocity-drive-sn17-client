import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const product = useLoaderData();
  const { _id, name, photo, type, details, brand, ratings, price } = product;
  const handleUpdateProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const type = form.type.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedProduct = {
      name,
      brand,
      price,
      ratings,
      type,
      details,
      photo,
    };
    console.log(updatedProduct);

    fetch(`https://velocity-drive-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="px-2">
      <div className="container mx-auto bg-[#0d47aa9c] mt-28 pb-20">
        <h2 className="text-4xl font-bold text-center mb-24 pt-20">
          Add products
        </h2>
        <form onSubmit={handleUpdateProducts}>
          {/* form name and brand name */}
          <div className="md:flex mb-6 px-4 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">
                  Product Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">
                  Brand Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  placeholder="Enter Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price and ratings */}
          <div className="md:flex mb-6 px-4 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter products price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Ratings</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="ratings"
                  defaultValue={ratings}
                  placeholder="Enter product ratings"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form types and Details */}
          <div className="md:flex mb-6 px-4 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Types</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Enter product types"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo */}
          <div className="mb-6 px-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl font-bold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={details}
                  name="details"
                  placeholder="Enter product details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="px-4 flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="btn text-white  w-1/2 bg-[#687EFF]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
