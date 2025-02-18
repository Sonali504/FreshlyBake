import { useParams } from "react-router-dom";

// Sample products data (you can replace it with dynamic data from a backend or a context store)
const products = [
  { id: 1, name: "Chocolate Cake", description: "Rich and creamy chocolate delight!", image: "/images/chocolate-cake.jpg" },
  { id: 2, name: "Strawberry Cake", description: "Sweet and fruity strawberry bliss!", image: "/images/strawberry-cake.jpg" },
  { id: 3, name: "Blueberry Pastry", description: "Soft pastry filled with blueberry goodness!", image: "/images/blueberry-pastry.jpg" },
  { id: 4, name: "Chocolate Cupcake", description: "Mini chocolate treat with frosting!", image: "/images/chocolate-cupcake.jpg" },
  { id: 5, name: "French Baguette", description: "Crispy and fresh French baguette!", image: "/images/french-baguette.jpg" },
];

const CakeDetail = () => {
  const { id } = useParams(); // Get the product ID from URL
  const product = products.find((item) => item.id === parseInt(id)); // Find the specific product by ID
  
  // If product not found, show a message
  if (!product) {
    return <p className="text-center text-2xl font-bold">Product Not Found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default CakeDetail;
