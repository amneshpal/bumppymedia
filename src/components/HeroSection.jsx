// import React, { useState } from 'react';
// import heroImage from '../assets/image11.svg';
// import shape1 from '../assets/shape1.svg';
// import shape2 from '../assets/shape2.svg';
// import shape3 from '../assets/shape3.svg';
// import shape4 from '../assets/shape4.svg';
// import './HeroSection.css';
// // import './hero.css';

// const HeroSection = () => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   return (
//     <div className="hero-section container my-0">
//       <div className="row align-items-center my-0" style={{ height: 'auto' }}>
//         {/* Left Section */}
//         <div className="col-md-6 col-12 mb-4 mb-md-0 content-container">
//           <span>
//             <button
//               className={`btn-welcome rounded-pill ${isNavbarOpen ? 'btn-navbar-open' : ''}`}
//               onClick={toggleNavbar}
//             >
//               Welcome to Tax Pay
//             </button>
//           </span>
//           <h1 className="fw-bold mt-2">
//             Maximize your savings and minimize your effort
//           </h1>
//           <p className="text-muted">
//             Let our expert team handle the complexities of tax filing, so you don’t have to. Fast, accurate, and stress-free - we make sure you get every benefit you deserve.
//           </p>
//           <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold me-5">
//             Explore Features
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="col-md-6 col-12 text-center">
//           <img src={heroImage} alt="Hero" className="img-fluid hero-image" />
//         </div>
//       </div>

//       {/* Decorative Shapes */}
//       <img
//         src={shape1}
//         alt="Decoration"
//         className={`shape shape1 ${isNavbarOpen ? 'shape-hidden' : ''}`}
//       />
//       <img
//         src={shape2}
//         alt="Decoration"
//         className={`shape shape2 ${isNavbarOpen ? 'shape-hidden' : ''}`}
//       />
//       <img
//         src={shape3}
//         alt="Decoration"
//         className={`shape shape3 ${isNavbarOpen ? 'shape-hidden' : ''}`}
//       />
//       <img
//         src={shape4}
//         alt="Decoration"
//         className={`shape shape4 ${isNavbarOpen ? 'shape-hidden' : ''}`}
//       />
//     </div>
//   );
// };

// export default HeroSection;







import React, { useState } from 'react';
import heroImage from '../assets/image11.svg';
import shape1 from '../assets/shape1.svg';
import shape2 from '../assets/shape2.svg';
import shape3 from '../assets/shape3.svg';
import shape4 from '../assets/shape4.svg';
import './HeroSection.css';
// import './hero.css';

const HeroSection = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="hero-section container my-0  " id='bg' >
      <div className="row align-items-center my-0" style={{ height: 'auto' }}>
        {/* Left Section */}
        <div id='left' className="col-md-6 col-12 mb-4 mb-md-0 content-container">
          <span id="a">
            <button
              className={`btn-welcome rounded-pill ${isNavbarOpen ? 'btn-navbar-open' : ''}`}
              onClick={toggleNavbar}
            >
              Welcome to Tax Pay
            </button>
          </span>
          <h1 className="fw-bold mt-2">
            Maximize your savings and minimize your effort
          </h1>
          <p className="text-muted">
            Let our expert team handle the complexities of tax filing, so you don’t have to. Fast, accurate, and stress-free - we make sure you get every benefit you deserve.
          </p>
          <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold me-5">
            Explore Features
          </button>
        </div>

        {/* Right Section */}
        <div className="col-md-6 col-12 text-center position-relative hero-image-wrapper">
          <img src={heroImage} alt="Hero" className="img-fluid central-image" />

          {/* Floating Icons */}
          <img src={shape1} alt="Decoration" className="floating-icon top-left  "id='top-left' />
          <img src={shape2} alt="Decoration" className="floating-icon top-right "id='top-righ' />
          <img src={shape3} alt="Decoration" className="floating-icon bottom-left" />
          <img src={shape4} alt="Decoration" className="floating-icon bottom-right" />
        </div>

      </div>
    </div>

  );
};

export default HeroSection;
