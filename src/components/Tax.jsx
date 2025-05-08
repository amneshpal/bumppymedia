import React, { useRef } from 'react';
import Tax1 from '../assets/Tax1.svg';
import Tax2 from '../assets/Tax2.svg';
import Tax3 from '../assets/Tax3.svg';
import Tax4 from '../assets/Tax4.svg';
import Tax5 from '../assets/Tax5.svg';
import Tax6 from '../assets/Tax6.svg';
import Tax7 from '../assets/Tax7.svg';
import Tax8 from '../assets/Tax8.svg';
import Tax9 from '../assets/Tax9.svg';
import Tax10 from '../assets/Tax10.svg';
import Tax11 from '../assets/Tax11.svg';
import Tax12 from '../assets/Tax12.svg';
import Tax13 from '../assets/Tax13.svg';
import Tax14 from '../assets/Tax14.svg';
import Tax15 from '../assets/Tax15.svg';
import './Tax.css';

const categories = [
  {
    title: "Income Tax Department",
    articles: [
      { tag: "Business Organisation", author: "Amnesh", date: "Sep 24, 2025", title: "Croatia’s Most Magical Island", image: Tax1 },
      { tag: "Finance Act", author: "Amnesh", date: "Sep 24, 2025", title: "Magical Island Visit Tips", image: Tax2 },
      { tag: "Advisory", author: "Amnesh", date: "Sep 24, 2025", title: "Top Tax Insights", image: Tax3 },
    ],
  },
  {
    title: "GST",
    articles: [
      { tag: "Business Organisation", author: "Amnesh", date: "Sep 24, 2025", title: "Understanding GST Reforms", image: Tax4 },
      { tag: "Finance Act", author: "Amnesh", date: "Sep 24, 2025", title: "GST Filing Guide", image: Tax5 },
      { tag: "Advisory", author: "Amnesh", date: "Sep 24, 2025", title: "Tax Strategies", image: Tax6 },
    ],
  },
  {
    title: "Account & Audit",
    articles: [
      { tag: "Business Organisation", author: "Amnesh", date: "Sep 24, 2025", title: "Accounts Basics", image: Tax7 },
      { tag: "Finance Act", author: "Amnesh", date: "Sep 24, 2025", title: "Audit Essentials", image: Tax8 },
      { tag: "Advisory", author: "Amnesh", date: "Sep 24, 2025", title: "Smart Auditing", image: Tax9 },
    ],
  },
];

function Tax() {
  const scrollRefs = useRef([]);

  const scroll = (i, direction) => {
    const container = scrollRefs.current[i];
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Tax Insights & Updates</h2>
          <p>
            Explore expert advice, smart strategies, and the latest updates to help you <br />
            navigate taxes with confidence and clarity.
          </p>
        </div>

        {categories.map((category, i) => (
          <div key={i} className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
              <h5 className="mb-0" id="t">{category.title}</h5>
            </div>

            <div className="position-relative" id="ab" style={{ paddingTop: '40px' }}>
              <button
                className="btn btn-sm btn-outline-secondary text-primary rounded-pill position-absolute"
                style={{
                  top: 0,
                  right: 90,
                  backgroundColor: "#EDEDFF",
                  zIndex: 2,
                }}
              >
                View more
              </button>

              {/* Left Arrow */}
              <button
                onClick={() => scroll(i, 'left')}
                className="position-absolute top-50 start-0 translate-middle-y d-none d-md-flex"
                style={{
                  zIndex: 1,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#e0e0e0',
                  border: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                }}
              >
                <span style={{ fontSize: '20px' }}>&lt;</span>
              </button>

              {/* Cards */}
              <div
                className="scroll-container d-flex overflow-auto gap-3 px-4"
                ref={(el) => (scrollRefs.current[i] = el)}
                style={{ scrollBehavior: 'smooth', marginLeft: '70px', marginRight: '50px' }}
              >
                {category.articles.map((article, j) => (
                  <div className="card flex-shrink-0 border-0" style={{ width: '300px' }} key={j}>
                    <img
                      src={article.image}
                      className="card-img-top rounded"
                      alt="article"
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <span className="badge bg-light mb-2" id="artical-color">{article.tag}</span>
                      <small className="d-block text-muted mb-1">
                        by {article.author} on {article.date}
                      </small>
                      <h6 className="card-title">{article.title}</h6>
                      <a href="#!" className="text-primary small text-muted" style={{ textDecoration: 'none', color: "black" }}>
                        Continue Reading
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll(i, 'right')}
                className="position-absolute top-50 end-0 translate-middle-y d-none d-md-flex"
                style={{
                  zIndex: 1,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#e0e0e0',
                  border: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                }}
              >
                <span style={{ fontSize: '20px' }}>&gt;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tax;
