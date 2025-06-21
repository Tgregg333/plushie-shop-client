import { Routes, Route } from "react-router-dom";

import Header from "./Shared/Header";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Footer from "./Shared/Footer";

import "./App.css";

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
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
