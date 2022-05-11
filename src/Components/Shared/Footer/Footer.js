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
            <span class="footer-title">Services</span>
            <span class="link link-hover">Branding</span>
            <span class="link link-hover">Design</span>
            <span class="link link-hover">Marketing</span>
            <span class="link link-hover">Advertisement</span>
          </div>
          <div>
            <span class="footer-title">Company</span>
            <span class="link link-hover">About us</span>
            <span class="link link-hover">Contact</span>
            <span class="link link-hover">Jobs</span>
            <span class="link link-hover">Press kit</span>
          </div>
          <div>
            <span class="footer-title">Legal</span>
            <span class="link link-hover">Terms of use</span>
            <span class="link link-hover">Privacy policy</span>
            <span class="link link-hover">Cookie policy</span>
          </div>
        </div>
      <p className="text-center">Copyright © 2019 - {new Date().getFullYear()} All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;
