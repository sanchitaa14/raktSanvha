import React from "react";
import help from "../assets/help.jpg";

function AboutUs() {
  return (
    <div className="bg-gray-100 py-16">
      <section id="about" className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-xl font-bold text-blue-700">Everything about us</p>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={help} alt="Help" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 mt-30">
            <div className="about-section-body bg-gray-200  flex items-center justify-between flex-col">
              <div className="col-1-2 animate-slide-in-left ">
                <h3 className="text-2xl font-bold mb-4">Who are we</h3>
                <p className="text-lg mb-6">
                  We are a non-profit organization dedicated to making a positive impact in the world. Our mission is to support various causes and charities, and to help those in need through donations and fundraising!
                </p>
              </div>
              <div className="col-1-2 animate-slide-in-right">
                <h3 className="text-2xl font-bold mb-4">Our culture</h3>
                <p className="text-lg mb-6">
                  We believe in a culture of kindness, compassion, and generosity. We strive to make a difference in people's lives, and to bring about positive change in the world. Our team is made up of passionate individuals who share a common goal of making a difference!
                </p>
              </div>
              <div className="col-1-2 animate-slide-in-left">
                <h3 className="text-2xl font-bold mb-4">How we work</h3>
                <p className="text-lg mb-6">
                  We work tirelessly to identify and support causes and charities that align with our values and mission. We partner with organizations that have a proven track record of making a positive impact in their communities. We rely on the generosity of our donors to fund our efforts, and we are committed to transparency and accountability in all that we do!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
