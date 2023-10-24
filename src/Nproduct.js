import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Nproduct = () => {
  return (
    <>
      <Container>
        <Row className="dis">
          <h1 className="sh">New Products</h1>
          <Col md={4} sm={6}>
            <NavLink to="/">
              <img
                src="img/gallery/new_product1.png"
                alt=" "
                className="imgzom"
              />
            </NavLink>
            <h3 className="hh">Mohamed Abdallah</h3>
            <p className="price">$ 50.500</p>
          </Col>
          <Col md={4} sm={6} className="smar">
            <NavLink to="/">
              <img
                src="img/gallery/new_product2.png"
                alt=" "
                className="imgzom"
              />
            </NavLink>
            <h3 className="hh">Mohamed Abdallah</h3>
            <p className="price">$ 50.500</p>
          </Col>
          <Col md={4} sm={6} className="smar">
            <NavLink to="/">
              <img
                src="img/gallery/new_product3.png"
                alt=" "
                className="imgzom"
              />
            </NavLink>
            <h3 className="hh">Mohamed Abdallah</h3>
            <p className="price">$ 50.500</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nproduct;
