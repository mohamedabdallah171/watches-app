import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Choose = () => {
  return (
    <>
      <Container>
        <Row className="chrow">
          <Col lg={6} md={6} sm={12} className="margin">
            <h1 className="chh">Watch of Choice</h1>
            <p className="chp">
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <button className="fbu">SHOW NOW</button>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img src="img/gallery/choce_watch1.png" alt=" " className="width" />
          </Col>
        </Row>

        <Row className="chrow">
          <Col lg={6} md={6} sm={12}>
            <img src="img/gallery/choce_watch2.png" alt=" " className="width" />
          </Col>

          <Col lg={6} md={6} sm={12} className="margin">
            <h1 className="chh">Watch of Choice</h1>
            <p className="chp">
              Enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <button className="fbu">SHOW NOW</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Choose;
