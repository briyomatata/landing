import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
// import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "../routes/Navbar";
import Hero from "../routes/Hero";
import Contact from "../routes/Contact";
import Footer from "../routes/Footer";
import Services from "../routes/Service";
import About from "../routes/About";
import Why from "../routes/Why";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;