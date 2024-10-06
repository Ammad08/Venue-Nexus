import React from "react";
// import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import AboutUs from "./About";
import Contact from "./Contact";
import FAQs from "./FAQs";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
// import Footer from "./Footer";

function Home() {
  return (
    <>
    <div>
    <div id="home">
      {/* <Navbar /> */}
      <SearchBar />
      <Slider />
    </div>

      <AboutUs />
      <Contact />
      <FAQs />
      <WhyChooseUs/>
      <HowItWorks/>
      {/* <Footer /> */}
      </div>
      </>
  );
}

export default Home;
