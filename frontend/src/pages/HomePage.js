import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Donation from "../components/Donation";
import Footer from "../components/Footer";
import Infobox from "../components/Infobox";
import Quote from "../components/Quote";

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Infobox />
      <About />
      <Quote />
      <Donation />
      <Footer />
    </div>
  );
};

export default HomePage;
