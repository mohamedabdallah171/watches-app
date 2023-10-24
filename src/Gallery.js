import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <Container>
        <Row className="dis">
          <Col xl={6} lg={4} md={6} sm={6} className="singall">
            <NavLink to="/">
              <img src="img/gallery/gallery1.png" alt=" " className="bigimg" />
            </NavLink>
          </Col>
          <Col xl={3} lg={4} md={6} sm={6} className="singall">
            <NavLink to="/">
              <img src="img/gallery/gallery2.png" alt=" " className="bigimg" />
            </NavLink>
          </Col>
          <Col xl={3} lg={4} md={12} sm={12} className="singall">
            <NavLink to="/">
              <img
                src="img/gallery/gallery3.png"
                alt=" "
                className="smallimg"
              />
            </NavLink>

            <Col xl={12} lg={12} md={6} sm={6} className="singall">
              <NavLink to="/">
                <img
                  src="img/gallery/gallery4.png"
                  alt=" "
                  className="smallimg"
                />
              </NavLink>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
