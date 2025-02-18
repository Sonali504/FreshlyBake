import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" to="/">BakeryDelight</Link>
        <div className="space-x-4">
          <Link className="hover:text-yellow-400" to="/shop">Shop</Link>
          <Link className="hover:text-yellow-400" to="/add-cake">Add Product</Link>
          <Link className="hover:text-yellow-400" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
