import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">company</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">about us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">our services</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">privacy policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">work with us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">get help</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">shipping</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">order status</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">Blood Banks</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">guidelines</a>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-bold mb-4">follow us</h4>
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
