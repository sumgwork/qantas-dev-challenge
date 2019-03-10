import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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

export default function withHomepage(WrappedComponent) {
  // returns a class which adds graphql query data to wrapped component
  return class extends Component {
    render() {
      return (
        <Query query={GET_HOMEPAGE_ELEMENTS}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error occured ...</p>;
            return (
              // wrap the component with both original and new props
              <WrappedComponent
                homepageData={data.homepageElement}
                {...this.props}
              />
            );
          }}
        </Query>
      );
    }
  };
}

// Exporting this as this can be used for testing later
export { GET_HOMEPAGE_ELEMENTS };
