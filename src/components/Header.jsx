// const Header = ({ mealType }) => {
//   return (
//     <div className="bg-white shadow-md p-4 text-center sticky top-0">
//       <h1 className="text-2xl font-bold">Khaliq's Kadai</h1>
//       <p className="text-gray-500 capitalize">{mealType}</p>
//     </div>
//   );
// };

// export default Header;
// const Header = ({ mealType }) => {
//   return (
//     <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-red-900/30 p-5">
//       <div className="flex flex-col items-center">
//         <h1 className="text-3xl font-black tracking-tighter italic text-white">
//           HOTEL <span className="text-red-600">CRESCENT</span>
//         </h1>
//         <div className="flex items-center gap-2 mt-1">
//           <span className="h-[1px] w-8 bg-red-600"></span>
//           <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
//             {mealType || "Menu"} Experience
//           </p>
//           <span className="h-[1px] w-8 bg-red-600"></span>
//         </div>
//       </div>
//     </div>
//   );
// };
const Header = ({ mealType }) => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E5E7EB]">
      <div className="max-w-3xl mx-auto px-4 py-6 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-[#0F172A]">
          Hotel <span className="text-[#C8A951]">Crescent</span>
        </h1>

        <p className="text-xs uppercase tracking-[0.4em] text-[#C8A951] mt-2 font-semibold">
          {mealType || "Menu"}
        </p>
      </div>
    </div>
  );
};

export default Header;