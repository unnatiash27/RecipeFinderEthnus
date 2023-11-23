import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";

import "./footer.css";

const Footer = () => {

  return (
    <>
      <Col className="footer-container">
        
        <p className="footerText">Made By team 496</p>
        <Navbar className="justify-content-center footerText">
          <p>~2023</p>
        </Navbar>
      </Col>
    </>
  );
};

export default Footer;

