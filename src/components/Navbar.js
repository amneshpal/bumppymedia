
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import './Responsiv.css';

// const Navbar = () => {
//     return (
//         <nav id ="bg-Collor" class="navbar navbar-expand-lg navbar-light bg-light ">
//             <div  className="container-fluid">
//                 <Link id ="Logo" className="navbar-brand font-weight-bold "  to="/">Logo</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//               aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="collapse navbar-collapse justify-content-center navbar-nav ms-auto  ">
//                         <li id = "ul-Text-arrange" className="nav-item">
//                             <Link className="nav-link" to="/">Blogs</Link>
//                         </li>
//                         <li id= "ul-Text-arrange" className="nav-item ">
//                             <Link className="nav-link" to="/about">About us</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">Contact us</Link>
//                         </li>
//                     </ul>





//                     {/* <li className="nav-item"> */}
//                     {/* <link className='nav-link' to ="/Login"><button type="button" class="btn btn-primary"> Login </button></link> */}
//                     <button id='btn' type="button" to="/Login" class="btn btn-primary rounded-pill px-4 py-2 fw-bold me-5"> Login </button>

//                     {/* </li> */}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;








// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// // import './Responsiv.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand fw-bold ms-5" to="/">Logo</Link>

//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse ms-5" id="navbarNav">
//             <ul className="navbar-nav mx-auto "> {/* Centered nav */}
//               <li className="nav-item mx-3">
//                 <Link className="nav-link" to="/">Blogs</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link" to="/about">About Us</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link" to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//             <button type="button" className="btn btn-primary rounded-pill px-4 py-2 fw-bold ms-auto me-5">Login</button>
//           </div>
//         </div>
//       </nav>

//     );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track the toggle button

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="#">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse  ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto  "> {/* Centering the navbar links */}
            <li className="nav-item mx-4  ">
              <Link className="nav-link" to="/" activeClassName="active">Blog</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/about-us" activeClassName="active">About Us</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/contact-us" activeClassName="active">Contact Us</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto"> {/* Aligning the Login button to the right */}
            <li className="nav-item">
              <button type="button" className="btn btn-primary rounded-pill px-4 py-2 fw-bold me-5">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
