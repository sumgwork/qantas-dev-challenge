import React, { useState } from "react";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";
import gql from "graphql-tag";
import styled from "styled-components";

import FAQBlock from "../components/FAQ-block";
import FAQList from "../components/FAQ-List";

/* The div used for 2 sections of the page */
const Card = styled.div`
  padding: 1rem;
  margin: 1rem;
  @media screen and (min-width: 40rem) {
    &.FAQBlock {
      border-right: ${props => props.theme.gray} 2px solid;
      padding-top: 3rem;
    }
  }
`;

/* jumbotron element at the top */
const HeroBlock = styled.div`
  background: ${props => props.theme.gray};
  h1 {
    font-size: 2rem;
    @media screen and (min-width: 40rem) {
      font-size: 2.5rem;
    }
  }
  @media screen and (min-width: 40rem) {
    margin-top: 2rem;
  }
`;

/* GRAPHQL Query for fetching FAQs from server */
const GET_FAQs_QUERY = gql`
  query GET_FAQs_QUERY {
    faqs {
      title
      body
    }
  }
`;

const FAQ = () => {
  // Using React Hooks for functional component state
  const [selectedFAQIndex, setSelectedFAQIndex] = useState(0);

  // handler function for changing selected FAQ
  // Using index parameter since there is no index provided in CMS data
  const selectFAQ = index => {
    setSelectedFAQIndex(index);
  };

  return (
    <Query query={GET_FAQs_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error occured ...</p>;

        return (
          <div>
            <HeroBlock className="jumbotron">
              <h1 data-test="title">Frequently Asked Questions</h1>
            </HeroBlock>
            <div className="container-fluid">
              <div className="row">
                <Card className="col-md-8 col-sm-12 FAQBlock">
                  <FAQBlock selectedFAQ={data.faqs[selectedFAQIndex]} />
                </Card>
                <Card className="col-md-4 col-sm-12">
                  <FAQList
                    faqs={data.faqs}
                    selectFAQ={selectFAQ}
                    selectedIndex={selectedFAQIndex}
                  />
                </Card>
              </div>
              {/* Helmet used for setting page title and meta elements */}
              <Helmet>
                <title>Qantas | FAQs</title>
                <meta
                  name="description"
                  content="Qantas Dev Challenge FAQs Page"
                />
              </Helmet>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default FAQ;
export { GET_FAQs_QUERY }; // Exporting so that it can be used while mocking for testing
