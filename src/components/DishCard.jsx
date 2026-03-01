import { useState } from "react";

const DishCard = ({ item, onSelect }) => {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => onSelect(item)}
      className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-3 cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded object-cover"
      />

      <div className="flex-1 px-3">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-green-600">₹{item.price}</p>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-2"
      >
        <button
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="bg-gray-200 px-2 rounded"
        >
          -
        </button>

        <span>{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-2 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DishCard;