// import { useState } from "react";

// const DishCard = ({ item, onSelect }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <div
//       onClick={() => onSelect(item)}
//       className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-3 cursor-pointer"
//     >
//       <img
//         src={item.image}
//         alt={item.name}
//         className="w-20 h-20 rounded object-cover"
//       />

//       <div className="flex-1 px-3">
//         <h3 className="font-semibold">{item.name}</h3>
//         <p className="text-sm text-gray-500">{item.description}</p>
//         <p className="text-green-600">₹{item.price}</p>
//       </div>

//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="flex items-center gap-2"
//       >
//         <button
//           onClick={() => setCount(count > 0 ? count - 1 : 0)}
//           className="bg-gray-200 px-2 rounded"
//         >
//           -
//         </button>

//         <span>{count}</span>

//         <button
//           onClick={() => setCount(count + 1)}
//           className="bg-green-500 text-white px-2 rounded"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DishCard;
// import { useState } from "react";
// import { Plus, Minus } from "lucide-react"; // npm i lucide-react

// const DishCard = ({ item, onSelect }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <div 
//       onClick={() => onSelect(item)}
//       className="group relative flex items-center bg-slate-800 border border-slate-700 p-2 rounded-2xl mb-4 transition-all hover:border-red-600 active:scale-95 shadow-xl overflow-hidden"
//     >
//       {/* Visual Accent for Red Branding */}
//       <div className="absolute left-0 top-0 h-full w-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

//       <div className="relative h-24 w-24 flex-shrink-0">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full rounded-xl object-cover"
//         />
//         {item.isBestseller && (
//           <span className="absolute -top-2 -left-2 bg-red-600 text-[10px] font-bold text-white px-2 py-1 rounded-full uppercase tracking-tighter">
//             Hot 🔥
//           </span>
//         )}
//       </div>

//       <div className="flex-1 px-4">
//         <h3 className="text-white font-bold text-lg leading-tight group-hover:text-red-500 transition-colors">
//           {item.name}
//         </h3>
//         <p className="text-xs text-slate-400 line-clamp-1 my-1 font-light">
//           {item.description}
//         </p>
//         <p className="text-red-500 font-black text-lg">₹{item.price}</p>
//       </div>

//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="flex flex-col items-center bg-slate-900/50 p-1 rounded-xl border border-slate-700"
//       >
//         <button
//           onClick={() => setCount(count + 1)}
//           className="p-2 text-white hover:text-red-500 transition-colors"
//         >
//           <Plus size={18} />
//         </button>
        
//         <span className="font-bold text-white text-sm">{count}</span>
        
//         <button
//           onClick={() => setCount(count > 0 ? count - 1 : 0)}
//           className="p-2 text-slate-500 hover:text-white transition-colors"
//         >
//           <Minus size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DishCard;
// import { Plus, Minus } from "lucide-react";

// const DishCard = ({ item, cart, addToCart, removeFromCart, onSelect }) => {
//   const quantity = cart?.[item.id]?.quantity || 0;

//   return (
//     <div
//       onClick={() => onSelect(item)}
//       className="flex bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 mb-5 overflow-hidden border border-gray-100 cursor-pointer"
//     >
//       <img
//         src={item.image}
//         alt={item.name}
//         className="w-28 h-28 object-cover"
//       />

//       <div className="flex-1 p-4">
//         <h3 className="text-lg font-semibold text-[#0F172A]">
//           {item.name}
//         </h3>

//         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//           {item.description}
//         </p>

//         <p className="mt-3 text-lg font-bold text-[#C8A951]">
//           ₹{item.price}
//         </p>
//       </div>

//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="flex flex-col justify-center items-center pr-4 gap-2"
//       >
//         <button
//           onClick={() => addToCart(item)}
//           className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center"
//         >
//           <Plus size={18} />
//         </button>

//         <span className="font-semibold text-[#0F172A]">
//           {quantity}
//         </span>

//         <button
//           onClick={() => removeFromCart(item)}
//           className="w-9 h-9 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center"
//         >
//           <Minus size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DishCard;
import { Plus, Minus } from "lucide-react";

const DishCard = ({ item, cart, addToCart, removeFromCart, onSelect }) => {
  const quantity = cart?.[item._id]?.quantity || 0;

  return (
    <div
      onClick={() => onSelect(item)}
      className="flex bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 mb-5 overflow-hidden border border-gray-100 cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-28 h-28 object-cover"
      />

      <div className="flex-1 p-4">
        <h3 className="text-lg font-semibold text-[#0F172A]">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {item.description}
        </p>

        <p className="mt-3 text-lg font-bold text-[#C8A951]">
          ₹{item.price}
        </p>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center pr-4 gap-2"
      >
        <button
          onClick={() => addToCart(item)}
          className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center"
        >
          <Plus size={18} />
        </button>

        <span className="font-semibold text-[#0F172A]">
          {quantity}
        </span>

        <button
          onClick={() => removeFromCart(item)}
          className="w-9 h-9 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center"
        >
          <Minus size={18} />
        </button>
      </div>
    </div>
  );
};

export default DishCard;