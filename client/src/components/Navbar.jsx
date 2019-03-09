import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const LinkItem = styled.li`
  margin: 0 1rem;
  line-height: 2;
  :hover {
    box-shadow: ${props => props.theme.bs};
    /* using box shadow for hover effect */
  }
`;

/* styling top nav bar */
const Nav = styled.nav`
  background-color: ${props => props.theme.white};
  padding-bottom: 0;
  border-bottom: 1px solid ${props => props.theme.grey};

  .navbar-brand {
    font-size: 1.5rem;
    padding-right: 2rem;
    color: ${props => props.theme.black};
  }
`;

const Navbar = () => {
  return (
    // copied navbar from bootstrap examples
    <Nav className="navbar navbar-expand-lg navbar-light">
      {/* Company logo routed to home page */}
      <Link to="/" role="link" aria-label="Qantas Cars logo">
        <span className="navbar-brand" aria-hidden="true">
          <img src="logo.png" width="40" height="40" alt="Qantas Cars" />{" "}
          <span>Qantas Cars</span>
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <LinkItem className="nav-item active">
            <NavLink
              to="/"
              isActive={checkActive}
              role="link"
              aria-label="Home page"
            >
              {/* is active is required for setting selected class for home URI, otherwise handled by NavLink */}
              <span className="nav-link" aria-hidden="true">
                Home
              </span>
            </NavLink>
          </LinkItem>
          <LinkItem className="nav-item">
            <NavLink
              to="/faq"
              role="link"
              aria-label="Frequently Asked Questions"
            >
              <span className="nav-link" aria-hidden="true">
                FAQs
              </span>
            </NavLink>
          </LinkItem>
        </ul>
      </div>
    </Nav>
  );
};

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/";
};

export default withRouter(Navbar);
