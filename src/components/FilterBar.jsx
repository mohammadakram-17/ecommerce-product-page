const categories = ["All", "Electronics", "Fashion", "Sports"];

const FilterBar = ({ selected, onSelect, priceRange, onPriceChange }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-6">
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              selected === cat
                ? "bg-violet-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-violet-50 hover:text-violet-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm text-gray-500">Max: ₹{priceRange}</span>
        <input
          type="range"
          min="499"
          max="4999"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="accent-violet-600 w-32"
        />
      </div>
    </div>
  );
};

export default FilterBar;