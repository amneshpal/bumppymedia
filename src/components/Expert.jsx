import React from 'react';
import im1 from '../assets/im1.svg';
import im2 from '../assets/im2.svg';
import im3 from '../assets/im3.svg';
import im4 from '../assets/im4.svg';
import im5 from '../assets/im5.svg';
import im6 from '../assets/im6.svg';

const services = [
  {
    icon: im1,
    title: 'ITR Filing Assistance',
    description:
      'Get expert assistance in tax filing for salaried and self-employed individuals, NRIs, Capital gains, and more.',
  },
  {
    icon: im2,
    title: 'TDS on Sale of Property',
    description: 'Hassle-free 26QB compliance on sale of property.',
  },
  {
    icon: im3,
    title: 'Legal Services',
    description:
      'For drafting and review of legal agreements such as Sale deed, Vendor agreement, Co-founders agreement, etc.',
  },
  {
    icon: im4,
    title: 'Launch and run a startup',
    description:
      'Legal drafting, documentation & company name change registration etc.',
  },
  {
    icon: im5,
    title: 'Government registrations',
    description: 'Registration for Shop license, PF, PAN, FSSAI and more.',
  },
  {
    icon: im6,
    title: 'Trademark & digital signature',
    description:
      'Trademark registrations and renewals. Digital signature certificate.',
  },
];

function Expert() {
  return (
    <div className="container py-5 expert-section">
      <div className="text-center mb-4">
        <h4>Looking for expert services?</h4>
        <p className="text-muted" style={{ fontSize: '14px' }}>
          In addition to providing software services, we also offer expert
          services to <br /> help you manage your business and legal compliances.
        </p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="service-card h-100 p-3 rounded shadow-sm"
              style={{ backgroundColor: 'white' }}
            >
              <div className="service-icon mb-3 text-start">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="img-fluid"
                  style={{ height: '50px' }}
                />
              </div>
              <h6 className="text-start" style={{ fontSize: '14px' }}>{service.title}</h6>
              <p className="text-muted text-start" style={{ fontSize: '14px' }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expert;
