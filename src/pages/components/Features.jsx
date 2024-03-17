import React from "react";
import { Link } from "react-router-dom";
const MainFeatures = () => {
  return (
    <div className="bg-gray-100 py-16">
      <section id="main-features" className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Main Features</h2>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex justify-center ">
              <button className="gradient-button mr-4 p-10"><Link to="/map">Order Blood</Link></button>
              <button className="gradient-button mr-4"><Link to="/camps">Look into Nearby Camps</Link></button>
              <button className="gradient-button"><Link to="/data">Blood Bank Directory</Link></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFeatures;
