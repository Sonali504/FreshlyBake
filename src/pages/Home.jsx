import CakeCard from "../components/CakeCard";

const products = [
  { id: 1, name: "Chocolate Cake", category: "Cakes", description: "Rich and creamy chocolate delight!", image: "/images/chocolate-cake.jpg" },
  { id: 2, name: "Strawberry Cake", category: "Cakes", description: "Sweet and fruity strawberry bliss!", image: "/images/strawberry-cake.jpg" },
  { id: 3, name: "Blueberry Pastry", category: "Pastries", description: "Soft pastry filled with blueberry goodness!", image: "/images/blueberry-pastry.jpg" },
  { id: 4, name: "Chocolate Cupcake", category: "Cupcakes", description: "Mini chocolate treat with frosting!", image: "/images/chocolate-cupcake.jpg" },
  { id: 5, name: "French Baguette", category: "Fresh Bread", description: "Crispy and fresh French baguette!", image: "/images/french-baguette.jpg" }
];

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mt-4">Delicious Baked Goods</h1>
      
      <h2 className="text-2xl font-semibold mt-6">Cakes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.filter(p => p.category === "Cakes").map((item) => (
          <CakeCard key={item.id} cake={item} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-6">Pastries</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.filter(p => p.category === "Pastries").map((item) => (
          <CakeCard key={item.id} cake={item} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-6">Cupcakes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.filter(p => p.category === "Cupcakes").map((item) => (
          <CakeCard key={item.id} cake={item} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-6">Fresh Bread</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.filter(p => p.category === "Fresh Bread").map((item) => (
          <CakeCard key={item.id} cake={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
