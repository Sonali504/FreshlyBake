import { Link } from "react-router-dom";

const CakeCard = ({ cake }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={cake.image} alt={cake.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{cake.name}</h2>
      <p className="text-gray-600">{cake.description}</p>
      {/* Update the path to match the one in App.jsx */}
      <Link to={`/cake/${cake.id}`}>
        <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CakeCard;
