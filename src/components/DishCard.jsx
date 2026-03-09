// import { Plus, Minus } from "lucide-react";

// const DishCard = ({ item, cart, addToCart, removeFromCart, onSelect }) => {
//   const quantity = cart?.[item._id]?.quantity || 0;

//   return (
//     <div
//       onClick={() => onSelect(item)}
//       className="flex justify-between items-start py-6 border-b border-[#C8A95133]"
//     >
//       {/* LEFT SIDE */}
//       <div className="flex-1 pr-4">

//         {/* DISH NAME + HEART */}
//         <div className="flex items-center gap-2">
//           <h3 className="text-lg font-semibold text-[#E7D3A3]">
//             {item.name}
//           </h3>

//           {item.bestseller && (
//             <img
//               src="/heart.png"
//               alt="heart"
//               className="w-4 h-4"
//             />
//           )}
//         </div>

//         {/* DESCRIPTION */}
//         <p className="text-sm text-[#CFC6A4] mt-2 leading-relaxed">
//           {item.description}
//         </p>

//         {/* PRICE + CHEF NOTE */}
//         <div className="flex items-center justify-between mt-3">

//           <p className="text-xl font-bold text-[#D4AF37]">
//             ₹{item.price}
//           </p>

//           <div className="flex items-center gap-2 text-[#D4AF37] text-sm mr-3.5">
//             <img
//               src="/Chef.png"
//               alt="chef"
//               className="w-4"
//             />
//             Chef's Note
//           </div>

//         </div>

//         {/* COOKING BUTTON */}
//         <button className="mt-3 border border-[#D4AF37] text-[#D4AF37] text-xs px-6 py-2 rounded-full w-56 text-left">
//           Cooking Instructions
//         </button>

//       </div>

//       {/* RIGHT SIDE */}
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="flex flex-col items-center gap-3"
//       >

//         {/* IMAGE BOX */}
//         {/* <div className="bg-white rounded-xl p-2 shadow-md"> */}
//           <div className="bg-white rounded-xl shadow-md flex items-center justify-center w-28 h-28">

//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-24 h-24 object-contain"
//           />
//         </div>

//         {/* QUANTITY */}
//         {/* <div className="flex items-center bg-[#D4AF37] text-black rounded-full px-3 py-1">
//           <button onClick={() => removeFromCart(item)}>
//             <Minus size={14} />
//           </button>

//           <span className="px-3 font-semibold">
//             {quantity}
//           </span>

//           <button onClick={() => addToCart(item)}>
//             <Plus size={14} />
//           </button>
//         </div> */}
// <div className="flex items-center justify-between bg-[#D4AF37] text-black rounded-full w-20 px-2 py-1 mt-2.5">
//   <button
//     onClick={() => removeFromCart(item)}
//     className="flex items-center justify-center w-6 h-6"
//   >
//     <Minus size={14} />
//   </button>

//   <span className="text-sm font-semibold">
//     {quantity}
//   </span>

//   <button
//     onClick={() => addToCart(item)}
//     className="flex items-center justify-center w-6 h-6"
//   >
//     <Plus size={14} />
//   </button>
// </div>

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
className="flex justify-between items-center gap-4 py-1"
>
{/* LEFT SIDE */} 
<div className="flex-1 pr-2 sm:pr-4">

```
    {/* DISH NAME + HEART */}
    <div className="flex items-center gap-2 flex-wrap">
      <h3 className="text-base sm:text-lg font-semibold text-[#E7D3A3]">
        {item.name}
      </h3>

      {item.bestseller && (
        <img
          src="/heart.png"
          alt="heart"
          className="w-4 h-4"
        />
      )}
    </div>

    {/* DESCRIPTION */}
    <p className="text-xs sm:text-sm text-[#CFC6A4] mt-2 leading-relaxed">
      {item.description}
    </p>

    {/* PRICE + CHEF NOTE */}
    {/* <div className="flex items-center justify-between mt-3 flex-wrap gap-2">

      <p className="text-lg sm:text-xl font-bold text-[#D4AF37]">
        ₹{item.price}
      </p>

      <div className="flex items-center gap-2 text-[#D4AF37] text-xs sm:text-sm">
        <img
          src="/Chef.png"
          alt="chef"
          className="w-4"
        />
        Chef's Note
      </div>

    </div> */}

    {/* COOKING BUTTON */}
    {/* <button className="mt-3 border border-[#D4AF37] text-[#D4AF37] text-xs sm:text-sm px-4 py-2 rounded-full w-full max-w-[220px] text-left hover:bg-[#D4AF37] hover:text-black transition">
      Cooking Instructions
    </button> */}
    {/* PRICE + CHEF NOTE */}
<div className="flex justify-between items-center mt-3">
  
  <p className="text-xl font-bold text-[#D4AF37]">
    ₹{item.price}
  </p>

  <div className="flex items-center gap-2 text-[#D4AF37] text-sm ">
    <img
      src="/Chef.png"
      alt="chef"
      className="w-4"
    />
    Chef's Note
  </div>

</div>

{/* COOKING BUTTON */}
<button className="mt-3 border border-[#D4AF37] text-[#D4AF37] text-xs px-6 py-2 rounded-full w-60 text-left">
  Cooking Instructions
</button>

  </div>

  {/* RIGHT SIDE */}
  <div
    onClick={(e) => e.stopPropagation()}
    className="flex flex-col items-center gap-3"
  >

    {/* IMAGE BOX */}
    <div className="bg-white rounded-xl shadow-md flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
      />

    </div>

    {/* QUANTITY CONTROL */}
    <div className="flex items-center justify-between bg-[#D4AF37] text-black rounded-full w-20 px-2 py-1">

      <button
        onClick={() => removeFromCart(item)}
        className="flex items-center justify-center w-6 h-6"
      >
        <Minus size={14} />
      </button>

      <span className="text-sm font-semibold">
        {quantity}
      </span>

      <button
        onClick={() => addToCart(item)}
        className="flex items-center justify-center w-6 h-6"
      >
        <Plus size={14} />
      </button>

    </div>

  </div>
</div>


);
};

export default DishCard;
