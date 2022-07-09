import React from "react";
import Announcement from "../components/Announcement";
import BestSeller from "../components/BestSeller";
import Browse from "../components/Browse";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Browse />
      <Categories />
      <BestSeller />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;