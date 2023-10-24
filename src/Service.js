import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";
import { BiSolidCube } from "react-icons/bi";
import { FaUnlockAlt } from "react-icons/fa";

const Service = () => {
  return (
    <>
      <Container className="servsec">
        <Row className="servrow" lg={4} md={6} sm={12}>
          <Col>
            <BiSolidCube className="icon1" />
            <h6 className="servh">Watch of Choice Watch of Choice</h6>
            <p className="servp">
              Enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FaUnlockAlt className="icon" />
            <h6 className="servh">Watch of Choice Watch of Choice</h6>
            <p className="servp">
              Enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <FiRefreshCw className="icon" />
            <h6 className="servh">Watch of Choice Watch of Choice</h6>
            <p className="servp">
              Enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
