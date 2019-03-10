import React from "react";
import HeroComponent from "../components/HeroComponent";

const Home = () => {
  // Home uses HeroComponent to render the hero element, which is wrapped inside a high order component (or container) HeroHOC
  return <HeroComponent />;
};

export default Home;
