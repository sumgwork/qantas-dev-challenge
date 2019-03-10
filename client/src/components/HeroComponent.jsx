import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import withHomepage from "./HOC/HeroHOC";

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding: 1rem;
  padding-top: 3rem;
  @media screen and (min-width: 40rem) {
    padding: 2rem;
  }
`;

const HeroComponent = props => {
  const { heading, subheading, heroImageUrl } = props.homepageData;
  // This prop has been injected by the higher order components

  // Creating a hook to store background style for Hero Component
  const [background, setBackground] = useState({
    background: "url(loader.gif) no-repeat",
    backgroundSize: "50px",
    backgroundPosition: "center"
  });
  // Creating a hook to keep track of whether or not the image has loaded successfully
  const [loaded, setLoaded] = useState(false);

  // Set the background when image is loaded
  const OnImageLoaded = img => {
    setBackground({
      ...background,
      background: `url(${heroImageUrl}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "60%"
    });
    // set loaded flag to true, to detach listener
    setLoaded(true);
  };

  // initializing an undefined image element
  let img = undefined;

  //attaching a listener when called
  const PreloadImage = src => {
    if (!loaded) {
      img = new Image();
      img.addEventListener("load", OnImageLoaded, { passive: true });
      img.src = src;
    }
  };

  //attaching a listener on first load - called only once
  PreloadImage(heroImageUrl);

  // this scans for changes, and removes the listener if image is loaded and image is present
  useEffect(() => {
    if (loaded && img) {
      img.removeEventListener("load", OnImageLoaded, { passive: true });
    }
  });

  return (
    <Hero style={background}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {/* learn more links to FAQ page */}
      <button className="primary-button">
        <Link to="/faq" role="link" aria-label="learn more">
          Learn More
        </Link>
      </button>
      {/* Helmet used for setting page title and meta elements */}
      <Helmet>
        <title>Qantas | {heading}</title>
        <meta name="description" content="Qantas Dev Challenge Home Page" />
      </Helmet>
    </Hero>
  );
};

// wrapped inside HeroHOC, this components receives data as props
export default withHomepage(HeroComponent);
