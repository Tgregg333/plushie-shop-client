// // import { useState } from "react";
// // import { Routes, Routes } from "react-router-dom";

// import Header from "./Shared/Header";
// import About from "./Components/About";
// import Cart from "./Components/Cart";
// import Contact from "./Components/Contact";
// import Index from "./Components/Index";
// import Shop from "./Components/Shop";
// import Footer from "./Shared/Footer";
// import "./App.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Header />
// //       <About />
// //       <Cart />
// //       <Contact />
// //       <Index />
// //       <Shop />
// //       <Footer />
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/shop" element={<Shop />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
