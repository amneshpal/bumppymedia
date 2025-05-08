import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Enterpris from '../assets/Enterpris.svg';
import TaxExperts from '../assets/TaxExperts.svg';
import SMEs from '../assets/SMEs.svg';
import Individuals from '../assets/Individuals.svg';
import Element from '../assets/Element.svg';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';
import './ProductsSection.css';

const products = [
  { image: Enterpris },
  { image: TaxExperts },
  { image: SMEs },
  { image: Individuals },
];

const ProductsSection = () => {
  return (
    <div style={{ backgroundColor: '#11141C', color: 'white', paddingTop: '60px' }}>
      <Container fluid="md">
        <div className="text-center mb-5">
          <h2>Products for everyone</h2>
          <p>
            Built for scale, made by experts and secure by design. Bringing you maximum<br />
            tax savings, unmatched speed and complete peace of mind.
          </p>
        </div>

        <Row className="g-4 justify-content-center mb-5">
          {products.map((product, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="product-image"
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <div className="text-block px-3 py-5 text-center text-md-start">
              <h2 className="highlight-line stroke-text mb-3">All our products</h2>
              <h2 className="highlight-line bold-text">are designed to deliver</h2>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center justify-content-md-end">
          <div className="main-image-wrapper">
  <img src={Element} alt="Main Visual" className="img-fluid responsive-img" id="mainI" />

  {/* Desktop Floating Icons */}
  <div className="desktop-floating-icons">
    <img src={img1} alt="Icon 1" className="floating-img img1" />
    <img src={img2} alt="Icon 2" className="floating-img img2" />
    <img src={img3} alt="Icon 3" className="floating-img img3" />
  </div>

  {/* Mobile Floating Icons */}
  <div className="mobile-floating-icons">
    <img src={img1} alt="Icon 1" className="floating-img "id="pi1" />
    <img src={img2} alt="Icon 2" className="floating-img" id="pi2" />
    <img src={img3} alt="Icon 3" className="floating-img"id="pi3" />
  </div>
</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsSection;
