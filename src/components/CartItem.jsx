import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-3 py-3 border-b border-gray-100">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-xl"
      />
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
        <p className="text-violet-600 font-bold text-sm">₹{item.price}</p>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-bold"
          >
            −
          </button>
          <span className="text-sm font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-bold"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-400 hover:text-red-600 text-sm"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;