import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Fsection = () => {
  return (
    <div className="con">
      <Container>
        <Row>
          <Col lg={7} md={7} sm={7} className="fcol">
            <h1 className="fh">Select Your New Perfect style</h1>
            <p className="fp">
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure{" "}
            </p>
            <button className="fbu">SHOP NOW</button>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <img src="img\hero\watch.png" alt="" className="fimg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fsection;
