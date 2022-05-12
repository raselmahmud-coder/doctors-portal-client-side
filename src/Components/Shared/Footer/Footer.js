import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <>
      <footer
className="lg:my-16"
      >
        <div className="footer p-10 text-black bg-center bg-cover sm:grid grid-cols-2"
        style={{ backgroundImage: `url(${footer})` }}>
          <div>
            <span className="footer-title">Services</span>
            <span className="link link-hover">Branding</span>
            <span className="link link-hover">Design</span>
            <span className="link link-hover">Marketing</span>
            <span className="link link-hover">Advertisement</span>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <span className="link link-hover">About us</span>
            <span className="link link-hover">Contact</span>
            <span className="link link-hover">Jobs</span>
            <span className="link link-hover">Press kit</span>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <span className="link link-hover">Terms of use</span>
            <span className="link link-hover">Privacy policy</span>
            <span className="link link-hover">Cookie policy</span>
          </div>
        </div>
      <p className="text-center">Copyright © 2019 - {new Date().getFullYear()} All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;
