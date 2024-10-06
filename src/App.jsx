import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VenueDetails from "./components/VenueDetails";
import Allvenues from "./components/Allvenues";
import About2 from "./components/About2";
import About from "./components/About";

import Contact2 from "./components/Contact2";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/venue/:id" element={<VenueDetails />} />
        <Route path="/all-venues" element={<Allvenues />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />

        <Route path="/contact2" element={<Contact2 />} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </>
  );
}

export default App;
