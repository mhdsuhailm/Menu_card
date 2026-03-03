// const DishModal = ({ selected, onClose }) => {
//   if (!selected) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-5 rounded-lg w-96">
//         <img
//           src={selected.image}
//           alt={selected.name}
//           className="w-full h-40 object-cover rounded"
//         />

//         <h2 className="text-xl font-bold mt-3">
//           {selected.name}
//         </h2>
//         <p className="text-gray-600">
//           {selected.description}
//         </p>
//         <p className="text-green-600 mt-2">
//           ₹{selected.price}
//         </p>

//         <button
//           onClick={onClose}
//           className="mt-4 w-full bg-red-500 text-white py-2 rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DishModal;
// const DishModal = ({ selected, onClose }) => {
//   if (!selected) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
//       {/* Background Blur */}
//       <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={onClose} />
      
//       <div className="relative bg-slate-900 border border-slate-800 p-0 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10">
//         <img
//           src={selected.image}
//           alt={selected.name}
//           className="w-full h-64 object-cover"
//         />
        
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-2">
//              <h2 className="text-2xl font-black text-white">{selected.name}</h2>
//              <p className="text-2xl font-black text-red-600">₹{selected.price}</p>
//           </div>
          
//           <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
//             {selected.description}
//           </p>

//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="flex-1 bg-slate-800 text-slate-400 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all"
//             >
//               Back
//             </button>
//             <button
//               className="flex-[2] bg-red-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-red-900/40 hover:bg-red-500 transition-all"
//             >
//               Add Item
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DishModal;
const DishModal = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            {selected.name}
          </h2>

          <p className="text-gray-600 mt-2">
            {selected.description}
          </p>

          <p className="text-xl font-bold text-[#C8A951] mt-4">
            ₹{selected.price}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-[#0F172A] text-white py-3 rounded-xl font-semibold hover:bg-black transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishModal;