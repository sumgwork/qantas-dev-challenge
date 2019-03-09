import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

// This is the div which contains 1 FAQ title
const TitleBlock = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray};
  padding: 1rem;
  cursor: pointer;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media screen and (min-width: 40rem) {
    h2 {
      font-size: 2rem;
    }
    padding: 2rem 1rem;
  }
  :last-child {
    border-bottom: none;
  }
  &.selected {
    color: ${props => props.theme.red};
  }
  transition: color 0.25s;
`;

const FAQList = props => {
  return (
    <div>
      {props.faqs.map((faq, index) => (
        // using index since CMS data doesn't have a primary key
        <TitleBlock
          key={index}
          onClick={() => props.selectFAQ(index)}
          className={[
            props.selectedIndex === index ? "selected" : null,
            "clickable"
          ].join(" ")}
        >
          <h2>{faq.title}</h2>
        </TitleBlock>
      ))}
    </div>
  );
};

FAQList.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ),
  selectedIndex: PropTypes.number.isRequired,
  selectFAQ: PropTypes.func.isRequired
};

export default FAQList;
