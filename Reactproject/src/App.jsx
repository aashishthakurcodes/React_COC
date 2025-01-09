import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Components/Home";
import Bgchanger from "./Components/BGchanger/Bgchanger";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import More from "./pages/More";

function App() {
  return (
    <Router>
      <Header />
      <Home/>
      <Bgchanger/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
