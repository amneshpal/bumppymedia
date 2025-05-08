import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Linkedin from '../assets/Linkedin.svg';
import Facebook from '../assets/Facebook.svg';
import X from '../assets/X.svg';
import Instagram from '../assets/Instagram.svg';
import './Footer.css';

function Footer() {
    return (
        <div>
            {/* Top Links & Social Icons */}
            <footer className="bg-dark text-white py-3">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap">
                    <div className="d-flex gap-4 mb-2">
                        <a href="/about" className="text-white text-decoration-none">About us</a>
                        <a href="/blogs" className="text-white text-decoration-none">Blogs</a>
                        <a href="/contact" className="text-white text-decoration-none">Contact us</a>
                    </div>
                    <div className="d-flex gap-3 mb-2">
                        <a href="#" className="text-white">
                            <img src={Facebook} alt="Facebook" width="24" height="24" />
                        </a>
                        <a href="#" className="text-white">
                            <img src={Linkedin} alt="LinkedIn" width="24" height="24" />
                        </a>
                        <a href="#" className="text-white">
                            <img src={Instagram} alt="Instagram" width="24" height="24" />
                        </a>
                        <a href="#" className="text-white">
                            <img src={X} alt="Twitter" width="24" height="24" />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Brand & Description */}
            <div className="py-4 border-bottom" style={{ backgroundColor: "#F6F2ED" }} id='font'>
                <div className="container" >
                    <div className="row align-items-center">
                        <div className="col-12 col-md-3 mb-3">
                            <h5 className="fw-bold "id='fw' >Tax Pay</h5>
                        </div>
                        <div className="col-12 col-md-9">
                            <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                                Our goal is to provide easy-to-use, transparent <br className="d-none d-sm-block" />
                                financial products that cater to the rapidly <br className="d-none d-sm-block" />
                                evolving financial needs of India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Info */}
            <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0 text-muted text-center text-md-start">&copy; 2025 Tax Pay</p>
                <div className="d-flex justify-content-center justify-content-md-end gap-3">
                    <a href="/privacy" className="text-muted text-decoration-none">Privacy Policy</a>
                    <a href="/terms" className="text-muted text-decoration-none">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
