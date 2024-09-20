import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import AboutUs from "./About";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Slider />
      <AboutUs />
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;
