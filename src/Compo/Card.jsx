import { addItem, aLlistedItems } from "../features/Shopping/Shopping";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const shoesCollection = useSelector(aLlistedItems);
  const dispatch = useDispatch();

  const shoesWithIds = shoesCollection.map((shoe, index) => ({
    ...shoe,
    id: index,
  }));



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {shoesWithIds.map((shoe) => (
        <div
          key={shoe.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <img
              src={shoe.imageUrl}
              alt={shoe.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <b className="text-lg font-semibold">{shoe.name}</b>
            <p className="text-gray-600">{`$${shoe.price}`}</p>
            <button
              type="button"
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => dispatch(addItem(shoe))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
