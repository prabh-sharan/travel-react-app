import React from "react";
import Hero from "./components/hero/Hero";
import Locations from "./components/locations/Locations";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Locations />
      <Search />
    </div>
  );
}

export default App;
