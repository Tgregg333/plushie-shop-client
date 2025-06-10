
import { Routes, Route } from "react-router-dom";

import Header from "./Shared/Header";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Shop from "./Components/Shop";
import Footer from "./Shared/Footer";
import "./App.css";

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
