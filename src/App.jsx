import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(4999);

  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      selectedCategory === "All" || p.category === selectedCategory;
    const priceMatch = p.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">All Products</h2>
            <p className="text-gray-500 text-sm mt-1">
              {filteredProducts.length} products found
            </p>
          </div>
          <FilterBar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
          <ProductGrid products={filteredProducts} />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;