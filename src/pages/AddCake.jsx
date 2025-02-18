import { useState } from "react";

const AddCake = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Cakes");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product Added: ${name} - ${category}`);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center">Add a New Product</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input type="text" placeholder="Product Name" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        
        <select className="w-full p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Cakes">Cakes</option>
          <option value="Pastries">Pastries</option>
          <option value="Cupcakes">Cupcakes</option>
          <option value="Fresh Bread">Fresh Bread</option>
        </select>
        
        <textarea placeholder="Description" className="w-full p-2 border rounded" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Image URL" className="w-full p-2 border rounded" value={image} onChange={(e) => setImage(e.target.value)} />
        
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Add Product</button>
      </form>
    </div>
  );
};

export default AddCake;
