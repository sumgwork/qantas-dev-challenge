import React from "react";
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
  return (
    <Hero
      style={{
        background: `url(${heroImageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
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
