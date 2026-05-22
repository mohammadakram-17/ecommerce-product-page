import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">🛍️ ShopEase</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl font-medium transition-colors"
        >
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;