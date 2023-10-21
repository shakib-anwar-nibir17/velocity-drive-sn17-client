import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const CartProducts = ({ item, items, setItems }) => {
  const { _id, name, brand, price, type, photo } = item;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://velocity-drive-server-mb4xboy83-shakib-nibirs-projects.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="flex bg-base-100 shadow-xl">
        <div>
          <figure>
            <img className="w-[400px] h-2/3" src={photo} alt={brand} />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">{name}</h2>

          <p>{type}</p>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error text-white text-4xl"
            >
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProducts.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
  setItems: PropTypes.func,
};

export default CartProducts;
