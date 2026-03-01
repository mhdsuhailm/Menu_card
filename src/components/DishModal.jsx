const DishModal = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-96">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-40 object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-3">
          {selected.name}
        </h2>
        <p className="text-gray-600">
          {selected.description}
        </p>
        <p className="text-green-600 mt-2">
          ₹{selected.price}
        </p>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DishModal;