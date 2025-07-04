import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashbord from "./components/Dashbord";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashbord />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
