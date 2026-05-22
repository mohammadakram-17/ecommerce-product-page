import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ));

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-violet-600 font-medium bg-violet-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-gray-800 font-semibold mt-2 mb-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {stars}
          <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-800">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;