import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CartProducts from "./CartProducts";
// import items from "./items";

const MyCart = () => {
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    fetch(`https://velocity-drive-server.vercel.app/cart/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [setItems, email]);

  return (
    <div className="container mx-auto mt-8 min-h-screen px-4">
      <h2 className="card-title">
        User Email: <span>{email}</span>
      </h2>
      {items.length ? (
        <div className=" mt-8 space-y-5">
          {items?.map((item) => (
            <CartProducts
              key={item._id}
              item={item}
              items={items}
              setItems={setItems}
            ></CartProducts>
          ))}
        </div>
      ) : (
        <div className="h-[600px] flex flex-col justify-center items-center border-2 border-red-200 text-center text-3xl space-y-4 drop-shadow-lg bg-[#FFFFFF]">
          <h2 className="text-red-400">NOTICE !!!</h2>
          <p className="text-xl text-center">No item has been added</p>
        </div>
      )}
    </div>
  );
};

export default MyCart;
