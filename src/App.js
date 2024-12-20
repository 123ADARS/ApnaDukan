// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";


// function App() {
//  // const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <>
//     <Navbar onSearch={setSearchTerm} />
//       <Home searchTerm={searchTerm} />
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<CartPage />} />
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";




function App() {
  const [searchTerm, setSearchTerm] = useState("");
   
  return (
    <Router>
      <Navbar onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
