import React from "react";
import { FaTruck, FaCheckCircle } from "react-icons/fa";

const OrderTracker = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col gap-20 items-center">
      <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
      <div className="flex justify-between gap-10 items-center mb-4">
        <div className="flex items-center">
          <FaTruck className="text-blue-500 text-xl mr-2" />
          <div>
            <p className="font-bold">Shipped</p>
            <p>Your order has been shipped</p>
          </div>
        </div>
        <div>
          <FaCheckCircle className="text-green-500 text-xl" />
        </div>
      </div>
      <div className="flex justify-between gap-10 items-center mb-4">
        <div className="flex items-center">
          <FaTruck className="text-blue-500 text-xl mr-2" />
          <div>
            <p className="font-bold">Dispatched to Driver</p>
            <p>Your order is on its way to you</p>
          </div>
        </div>
        <div>
          <FaCheckCircle className="text-green-500 text-xl" />
        </div>
      </div>
      <div className="flex justify-between gap-10 items-center mb-4">
        <div className="flex items-center">
          <FaTruck className="text-blue-500 text-xl mr-2" />
          <div>
            <p className="font-bold">On the Way</p>
            <p>Your order is out for delivery</p>
          </div>
        </div>
        <div>
          <FaCheckCircle className="text-gray-500 text-xl" />
        </div>
      </div>
      <div className="flex justify-between gap-10 items-center">
        <div className="flex items-center">
          <FaTruck className="text-blue-500 text-xl mr-2" />
          <div>
            <p className="font-bold">Delivered</p>
            <p>Your order has been delivered</p>
          </div>
        </div>
        <div>
          <FaCheckCircle className="text-gray-500 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;
