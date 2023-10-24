import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
const Popular = () => {
  return (
    <>
      <Container className="populrItems">
        <Row>
          <div>
            <h1 className="poph">Popular Items</h1>
            <p className="popp">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida.
            </p>
          </div>
          <Col lg={4} md={6} sm={6} className="watch">
            <div className="box">
              <img src="img/gallery/popular1.png" alt="" className="popimg" />
              <BiHeart className="popicon" />
              <NavLink className="popNav">Add to Cart</NavLink>
            </div>

            <div className="text">
              <h3 className="popname">Thermo Ball Etip Gloves</h3>
              <p className="poppar">$ 45,743</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="watch">
            <div className="box">
              <img src="img/gallery/popular2.png" alt="" className="popimg" />
              <BiHeart className="popicon" />
              <NavLink className="popNav">Add to Cart</NavLink>
            </div>
            <div className="text">
              <h3 className="popname">Thermo Ball Etip Gloves</h3>
              <p className="poppar">$ 45,743</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="watch">
            <div className="box">
              <img src="img/gallery/popular3.png" alt="" className="popimg" />
              <BiHeart className="popicon" />
              <NavLink className="popNav">Add to Cart</NavLink>
            </div>
            <div className="text">
              <h3 className="popname">Thermo Ball Etip Gloves</h3>
              <p className="poppar">$ 45,743</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={6} className="watch">
            <div className="box">
              <img src="img/gallery/popular4.png" alt="" className="popimg" />
              <BiHeart className="popicon" />
              <NavLink className="popNav">Add to Cart</NavLink>
            </div>

            <div className="text">
              <h3 className="popname">Thermo Ball Etip Gloves</h3>
              <p className="poppar">$ 45,743</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="watch">
            <div className="box">
              <img src="img/gallery/popular5.png" alt="" className="popimg" />
              <BiHeart className="popicon" />
              <NavLink className="popNav">Add to Cart</NavLink>
            </div>
            <div className="text">
              <h3 className="popname">Thermo Ball Etip Gloves</h3>
              <p className="poppar">$ 45,743</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="watch">
            <div className="box">
              <img src="img/gallery/popular6.png" alt="" className="popimg" />
              <BiHeart className="popicon" />
              <NavLink className="popNav">Add to Cart</NavLink>
            </div>
            <div className="text">
              <h3 className="popname">Thermo Ball Etip Gloves</h3>
              <p className="poppar">$ 45,743</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Popular;
