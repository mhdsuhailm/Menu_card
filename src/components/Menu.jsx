// import DishCard from "./DishCard";

// const Menu = ({ data, onSelect,cart,addToCart,removeFromCart }) => {
//   return (
//     <div className="p-4">
//       {data.map((category) => (
//         <div key={category.category} className="mb-6">
//           {/* <h2 className="text-xl text-white font-bold mb-3">
//             {category.category}
//           </h2> */}
//           <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-l-4 border-[#C8A951] pl-4">
//             {category.category}
//           </h2>

//           {category.items.map((item) => (
//             <DishCard
//   key={item.id}
//   item={item}
//   onSelect={onSelect}
//   cart={cart}
//   addToCart={addToCart}
//   removeFromCart={removeFromCart}
// />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;

import DishCard from "./DishCard";

const Menu = ({
  groupedData = {},
  onSelect,
  cart,
  addToCart,
  removeFromCart
}) => {
  return (
    <div className="p-4">
      {Object.keys(groupedData).map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-l-4 border-[#C8A951] pl-4">
            {category}
          </h2>

          {groupedData[category].map((item) => (
            <DishCard
              key={item._id}
              item={item}
              onSelect={onSelect}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;