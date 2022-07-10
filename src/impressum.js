import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Imprint from "./components/Imprint";

const Impressum = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Imprint />
    </main>
  );
}

export default Impressum;
