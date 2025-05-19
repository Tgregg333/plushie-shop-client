// import { useState } from "react";
import Header from "./Shared/Header";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Shop from "./Components/Shop";
import Footer from "./Shared/Footer";
import "./App.css" 

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cart />
      <Contact />
      <Index />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
