
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { aCartItems,clearCart,updateQuantity} from "../features/Shopping/Shopping";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector(aCartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    const price = cartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setTotalPrice(price);
  }, [cartItems]);

  console.log(cartItems)

  if (cartItems.length === 0) {
    return (
      <h1 className="text-center font-bold text-3xl">Your cart is empty</h1>
    );
  } else {
    return (
      <>
        <div>
          {cartItems.map((shoes) => (
            <div
              className="flex justify-between items-center p-6"
              key={shoes.id}
            >
              <div className="w-12 h-full">
                <img
                  src={shoes.imageUrl}
                  alt={shoes.name}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="w-1/3">
                <h6>{shoes.name}</h6>
                <p>{shoes.quantity}</p>
                <p>${shoes.price}</p>
              </div>
              <div className="flex justify-between w-1/6">
                <button
                  className="bg-red-200 border-red-200 flex justify-center items-center h-6 w-6"
                  onClick={() => dispatch(updateQuantity({ id: shoes.id, quantity: shoes.quantity - 1 }))}
                >
                  -
                </button>
                <p>{shoes.quantity}</p>
                <button
                  className="bg-green-200 border-green-200 flex justify-center items-center h-6 w-6"
                  onClick={() => dispatch(updateQuantity({ id: shoes.id, quantity: shoes.quantity + 1 }))}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center p-6 border-t-2 border-gray-200">
            <p>Total: ${totalPrice}</p>
            
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => dispatch(clearCart())}
            >
              Clear All Items
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
