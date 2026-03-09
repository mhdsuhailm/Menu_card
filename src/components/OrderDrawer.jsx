// import { Plus, Minus } from "lucide-react";

// const OrderDrawer = ({
//   cart,
//   isOpen,
//   onClose,
//   addToCart,
//   removeFromCart,
//   token
// }) => {
//   const items = Object.values(cart || {});

//   const total = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
// //   const handleCheckout = async () => {
// //   const items = Object.values(cart);

// //   const orderData = {
// //     customerName: "Walk-in Customer",
// //     phone: "9999999999",
// //     tableNumber: "T1",
// //     items
// //   };

// //   try {
// //     const response = await fetch("http://localhost:5000/api/orders", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify(orderData)
// //     });
// //         console.log("Order received:", req.body);

// //     if (!response.ok) {
// //       const errorText = await response.text();
// //       console.error("Server error:", errorText);
// //       alert("Server error occurred");
// //       return;
// //     }

// //     const data = await response.json();
// //     console.log(data);

// //     alert("Order placed successfully!");
// //     onClose();

// //   } catch (err) {
// //     console.error(err);
// //     alert("Order failed");
// //   }
// // };
// const handleCheckout = async () => {
//   const items = Object.values(cart);
//   const orderData = {
//     customerName: "Walk-in Customer",
//     phone: "9999999999",
//     tableNumber: "T1",
//     items
//   };

//   try {
//     const response = await fetch("https://food-be-eyck.onrender.com/api/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`

//       },
//       body: JSON.stringify(orderData)
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Server error:", errorText);
//       alert("Server error occurred");
//       return;
//     }

//     const data = await response.json();
//     console.log("Order saved:", data);

//     alert("Order placed successfully!");
//     onClose();

//   } catch (err) {
//     console.error(err);
//     alert("Order failed");
//   }
// };
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex sm:justify-end justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/30 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Drawer */}
//       <div className="relative bg-white w-full sm:w-96 h-[90%] sm:h-full rounded-t-3xl sm:rounded-none shadow-2xl p-6 overflow-y-auto animate-slideUp sm:animate-none">

//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-black transition"
//           >
//             ←
//           </button>

//           <h2 className="text-xl font-bold text-[#0F172A]">
//             Your Order
//           </h2>
//         </div>

//         {/* Empty State */}
//         {items.length === 0 && (
//           <div className="text-center mt-20">
//             <p className="text-gray-400 mb-4">
//               Your cart is empty
//             </p>
//             <button
//               onClick={onClose}
//               className="text-[#C8A951] font-semibold"
//             >
//               Browse Menu
//             </button>
//           </div>
//         )}

//         {/* Cart Items */}
//         {items.map((item) => (
//           <div
//             key={item._id}
//             className="mb-5 border-b pb-4"
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <h4 className="font-semibold text-[#0F172A]">
//                   {item.name}
//                 </h4>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price}
//                 </p>
//               </div>

//               <p className="font-bold text-[#C8A951]">
//                 ₹{item.quantity * item.price}
//               </p>
//             </div>

//             {/* Quantity Controls */}
//             <div className="flex items-center gap-3 mt-3">
//               <button
//                 onClick={() => removeFromCart(item)}
//                 className="w-8 h-8 border rounded-full flex items-center justify-center hover:border-[#C8A951] transition"
//               >
//                 <Minus size={16} />
//               </button>

//               <span className="font-semibold text-[#0F172A]">
//                 {item.quantity}
//               </span>

//               <button
//                 onClick={() => addToCart(item)}
//                 className="w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center hover:bg-black transition"
//               >
//                 <Plus size={16} />
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Total Section */}
//         {items.length > 0 && (
//           <>
//             <div className="mt-6 border-t pt-4 flex justify-between text-lg font-bold">
//               <span>Total</span>
//               <span className="text-[#C8A951]">
//                 ₹{total}
//               </span>
//             </div>

//             <button
//               onClick={handleCheckout}
//               disabled={items.length === 0}
//               className={`mt-6 w-full py-3 rounded-xl transition ${
//                 items.length === 0
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-[#0F172A] text-white hover:bg-black"
//               }`}
//             >
//               Proceed to Checkout
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderDrawer;
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SuccessModal from "./SuccessModal";

const OrderDrawer = ({
  cart,
  isOpen,
  onClose,
  addToCart,
  removeFromCart,
  token
}) => {

  const [showSuccess, setShowSuccess] = useState(false);

  const items = Object.values(cart || {});

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const handleCheckout = async () => {

    const orderData = {
      customerName: "Walk-in Customer",
      phone: "9999999999",
      tableNumber: "T1",
      items
    };

    try {

      const response = await fetch(
        "https://food-be-eyck.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(orderData)
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        alert("Server error occurred");
        return;
      }

      const data = await response.json();
      console.log("Order saved:", data);

      onClose();
      setShowSuccess(true);

    } catch (err) {
      console.error(err);
      alert("Order failed");
    }
  };

  // if (!isOpen) return null;
  if (!isOpen && !showSuccess) return null;

  return (
    <>
      {/* ORDER SUMMARY MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white w-[320px] rounded-2xl shadow-xl p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-red-600 font-bold">
              ORDER SUMMARY
            </h2>

            <button
              onClick={onClose}
              className="text-gray-500"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          {items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center mb-3"
            >
              <span className="text-sm text-gray-700">
                {item.name}
              </span>

              <div className="flex items-center gap-2">

                {/* Quantity */}
                <div className="flex items-center bg-[#D4AF37] text-white rounded-full px-2">

                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-1"
                  >
                    <Minus size={12} />
                  </button>

                  <span className="px-2 text-sm">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-1"
                  >
                    <Plus size={12} />
                  </button>

                </div>

                {/* Price */}
                <span className="text-sm font-semibold">
                  ₹{item.price * item.quantity}
                </span>

              </div>
            </div>
          ))}

          {/* Totals */}
          <div className="border-t mt-4 pt-3 text-sm">

            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-1">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>

            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-5">

            <button
              onClick={onClose}
              className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-sm"
            >
              Cancel
            </button>

            <button
              onClick={handleCheckout}
              className="bg-red-500 text-white px-4 py-1 rounded-full text-sm"
            >
              Confirm
            </button>

          </div>

        </div>
      </div>

      {/* SUCCESS MODAL */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default OrderDrawer;