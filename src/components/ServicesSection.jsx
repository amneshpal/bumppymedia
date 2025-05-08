import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CloudDoc from '../assets/CloudDoc.svg';
import Enterprise from '../assets/Enterprise.svg';
import Frame47 from '../assets/Frame47.svg';
import mail from '../assets/mail.svg';
import './ServicesSection.css';
import './Responsiv.css';

const services = [
  {
    title: "Tax Cloud",
    desc: "ITR filing software for Tax Experts",
    icon: CloudDoc
  },
  {
    title: "Enterprise",
    desc: "GST, E-Invoicing, Max-ITC, E-Way bill & more",
    icon: Enterprise
  },
  {
    title: "E- Invoicing",
    desc: "Bulk invoice in Tally or any ERP",
    icon: Frame47
  },
  {
    title: "GST Software",
    desc: "G1-G9 filings made 3x faster",
    icon: mail
  },
];

function ServicesSection() {
  return (
    <Container className="mt-5">

      {/* Heading */}
      <div className="container py-5 text-center" id='serviceResponce'>
        <h2 className="fw-bold display-6 responsive-heading">
          India’s largest tax and financial <br className="d-none d-md-block" />
          services platform
        </h2>
        <p className="text-muted lead responsive-subheading">
          Explore our wide range of software solutions
        </p>
      </div>

      {/* Cards for md+ screens with overlap */}
      <Row
        className="position-relative d-none d-md-flex"
        style={{ marginBottom: '-100px', zIndex: 2 }}
      >
        {services.map((service, idx) => (
          <Col md={3} key={idx}>
            <Card className="shadow h-100 ">
              <Card.Body>
                <div className="mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid"
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Stacked cards for small screens */}
      <Row className="d-flex d-md-none mt-4">
        {services.map((service, idx) => (
          <Col xs={12} key={idx} className="mb-3">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <div className="mb-2">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid"
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Long card behind small cards */}
      <Row className="position-relative" style={{ zIndex: 1 }}>
        <Col>
          <Card style={{ height: '250px' }}>
            <Card.Body
              className="d-flex justify-content-center align-items-center highlight-box rounded-4 gap-4"
              style={{ paddingBottom: "43px", paddingRight: "53px", paddingLeft: "53px" }}
            >

              <Card.Body
                className="position-relative highlight-box rounded-4"
                style={{ height: "100%", padding: "43px 53px" }}
              >
                {/* Top-left corner */}
                <div
                  className="highlight-text position-absolute"
                  style={{ top: -17, left: 0 }}
                >
                  Financial
                </div>

                {/* Bottom-right corner */}
                <div
                  className="highlight-text position-absolute"
                  style={{ bottom: -62, right: 0 }}
                >
                  Service
                </div>
              </Card.Body>


            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br /><br /> <br />
    </Container>
  );
}

export default ServicesSection;
