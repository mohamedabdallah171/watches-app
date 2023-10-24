import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {AiOutlineTwitter} from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineBehance } from 'react-icons/ai';
import { AiOutlineGlobal } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <Container>

      <Row className='chrow'>
        <Col lg={3} md={6} sm={12}>
        <img src="img/logo/logo2_footer.png"/>
        <p className='footerp'>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <h4 className='footerh'>Quick Links</h4>
        <NavLink className='footerlinks'>
          <p>
        About

          </p>
        </NavLink>
        <NavLink className='footerlinks'>
              <p>
            
        Offers & Discounts
          </p>
        </NavLink>
        <NavLink className='footerlinks'>
        <p>
            
        Get Coupon
            </p>
        </NavLink>
        <NavLink className='footerlinks'>
              <p>
            
        Contact Us
          </p>
        </NavLink>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <h4 className='footerh'>New Products</h4>
        <NavLink className='footerlinks'>
          <p>
        About

          </p>
        </NavLink>
        <NavLink className='footerlinks'>
              <p>
            
        Offers & Discounts
          </p>
        </NavLink>
        <NavLink className='footerlinks'>
        <p>
            
        Get Coupon
            </p>
        </NavLink>
        <NavLink className='footerlinks'>
              <p>
            
        Contact Us
          </p>
        </NavLink>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <h4 className='footerh'>Support</h4>
        <NavLink className='footerlinks'>
          <p>
        About

          </p>
        </NavLink>
        <NavLink className='footerlinks'>
              <p>
            
        Offers & Discounts
          </p>
        </NavLink>
        <NavLink className='footerlinks'>
        <p>
            
        Get Coupon
            </p>
        </NavLink>
        <NavLink className='footerlinks'>
              <p>
            
        Contact Us
          </p>
        </NavLink>
        </Col>
      </Row>
      <Row className='chrow'>
<Col lg={8} md={8} sm={12}>
<p className='footerp2'> Copyright &copy: 2021 All rights reserved | This template is made by
<span className='footerspan'>Eng/ Mohamed Abdallah</span></p>
</Col>
<Col lg={3} md={4} sm={12}>
<AiOutlineTwitter className='footericon'/>
<BiLogoFacebook  className='footericon'/>
<AiOutlineBehance  className='footericon'/>
<AiOutlineGlobal  className='footericon'/>

</Col>
      </Row>

    </Container>
    
    
    
    </>
  )
}

export default Footer