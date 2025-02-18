import { useState } from "react";
import CakeCard from "../components/CakeCard";

const products = [
  { id: 1, name: "Chocolate Cake", category: "Cakes", description: "Rich and creamy chocolate delight!", image: "/images/chocolate-cake.jpg" },
  { id: 2, name: "Strawberry Cake", category: "Cakes", description: "Sweet and fruity strawberry bliss!", image: "/images/strawberry-cake.jpg" },
  { id: 3, name: "Blueberry Pastry", category: "Pastries", description: "Soft pastry filled with blueberry goodness!", image: "/images/blueberry-pastry.jpg" },
  { id: 4, name: "Chocolate Cupcake", category: "Cupcakes", description: "Mini chocolate treat with frosting!", image: "/images/chocolate-cupcake.jpg" },
  { id: 5, name: "French Baguette", category: "Fresh Bread", description: "Crispy and fresh French baguette!", image: "/images/french-baguette.jpg" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mt-4">Bakery Shop</h1>

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {["All", "Cakes", "Pastries", "Cupcakes", "Fresh Bread"].map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-white ${
              selectedCategory === category ? "bg-yellow-500" : "bg-gray-700"
            } hover:bg-yellow-600`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((item) => (
          <CakeCard key={item.id} cake={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
