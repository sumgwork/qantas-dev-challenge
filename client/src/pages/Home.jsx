import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import gql from "graphql-tag";

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

/* GRAPHQL Query for fetching home page details from server */
const GET_HOMEPAGE_ELEMENTS = gql`
  query GET_HOMEPAGE_ELEMENTS {
    homepageElement {
      heading
      subheading
      heroImageUrl
    }
  }
`;
class Home extends Component {
  state = {};

  render() {
    return (
      <Query query={GET_HOMEPAGE_ELEMENTS}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error occured ...</p>;
          const { heading, subheading, heroImageUrl } = data.homepageElement;
          return (
            // setting background image dynamically
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
                <meta
                  name="description"
                  content="Qantas Dev Challenge Home Page"
                />
              </Helmet>
            </Hero>
          );
        }}
      </Query>
    );
  }
}

export default Home;
