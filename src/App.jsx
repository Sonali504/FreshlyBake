import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CakeDetail from "./pages/CakeDetail";
import AddCake from "./pages/AddCake";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cake/:id" element={<CakeDetail />} />
        <Route path="/add-cake" element={<AddCake />} />
      </Routes>
    </Router>
  );
}

export default App;
