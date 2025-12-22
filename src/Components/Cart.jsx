import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { X, Trash2 } from "lucide-react";
import cartimg from "../assets/cartimg.svg";

export default function Cart({ toggleCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MABEL BUTTERFLY BIG GREEN STONE RING",
      price: 599.0,
      quantity: 1,
      image: cartimg,
    },
    {
      id: 2,
      name: "MABEL BUTTERFLY BIG GREEN STONE RING",
      price: 599.0,
      quantity: 1,
      image: cartimg,
    },
    {
      id: 3,
      name: "MABEL BUTTERFLY BIG GREEN STONE RING",
      price: 599.0,
      quantity: 1,
      image: cartimg,
    },
  ]);

  const navigate = useNavigate(); // Initialize navigate

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  const handleCheckout = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Example method: Close cart and navigate to checkout after a short delay
    setTimeout(() => {
      toggleCart(); // Close the cart
      navigate("/checkout", { state: { cartItems } }); // Navigate with cartItems as state
    }, 500); // Delay to allow scroll to complete
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-medium text-[#3c003c]">Cart</h2>
          <button
            onClick={toggleCart}
            className="text-white bg-[#283878] rounded-full p-2"
          >
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 space-y-6 py-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-0 right-0 bg-[#283878] text-white rounded-md p-1"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm text-[#3c003c] font-medium">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-gray-400 w-fit text-sm">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border-r border-gray-400"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border-l border-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-[#3c003c] text-sm">
                    ₹{formatPrice(item.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal and Checkout */}
        <div className="border-t px-6 py-6 text-[#3c003c]">
          <div className="flex justify-between text-sm">
            <span className="uppercase">Subtotal</span>
            <span className="font-medium">₹{formatPrice(subtotal)}</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">(Incl. of all taxes)</p>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-[#283878] text-white py-3 rounded-full text-sm font-medium"
          >
            <span className="mr-2">🛒</span> Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
