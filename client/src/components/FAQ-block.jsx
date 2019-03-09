import React, { Component } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

// Question and answer block, left panel
const DivBlock = styled.div`
  min-height: 40vh;
  h2 {
    font-weight: bold;
  }
`;

class FAQBlock extends Component {
  state = {};
  render() {
    const { title, body } = this.props.selectedFAQ;
    return (
      <DivBlock>
        <h2>{title}</h2>
        <p className="content" dangerouslySetInnerHTML={{ __html: body }} />
        {/* input has to be properly sanitised, since it can come in html format. Since here we are using our own CMS, 
          it can be assumed safe to use dangerouslySetInnerHtml. Otherwise, would have used DOMPurify or html-react-parser libraries 
        */}
      </DivBlock>
    );
  }
}

FAQBlock.propTypes = {
  selectedFAQ: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default FAQBlock;
