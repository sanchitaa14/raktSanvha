import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4 uppercase">company</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">About As</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Work With Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4 uppercase">get help</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Shipping</a>
              </li>
              <li>
                <a href="/track" className="text-gray-300 hover:text-white">Order status</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4 uppercase">Blood Banks</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Guidelines</a>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4 uppercase">follow us</h4>
            <div className="social-links">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
