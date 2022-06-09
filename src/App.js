import React from "react";
import Hero from "./components/hero/Hero";
import Locations from "./components/locations/Locations";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Locations />
    </div>
  );
}

export default App;
