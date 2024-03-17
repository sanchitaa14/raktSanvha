import React, { useState, useRef } from 'react';
import axios from 'axios';
import {firestore, auth} from "../firebase";
import {doc, setDoc} from "@firebase/firestore";

export default function Form() {
    const fileInputRef = useRef(null);
    const [prediction, setPrediction] = useState(null);
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [patientName, setPatientName] = useState(null);
    const [aadhar, setAadhar] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(auth.currentUser) {
            const docRef = doc(firestore, "delivery-details", auth.currentUser.email);
            
            let data = {
                name: name,
                address: address,
                patientName: patientName,
                aadhar: aadhar,
                phone: phone,
                email: email
            }
    
            try {
                await setDoc(docRef, data);
    
                console.log("Data added successfully to Firestore!");
            }
            catch(err) {
                console.log(err);
            }
        }
    }

  const handleButtonClick = async () => {
    try {
      const formData = new FormData();
      formData.append('file', fileInputRef.current.files[0]);

      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Delivery Details Form</h1>
      <form className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            placeholder="Enter your address"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
            Patient Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patientName"
            type="text"
            placeholder="Enter patient's name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadhar">
            Aadhar Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="aadhar"
            type="number"
            minLength={12}
            maxLength={12}
            placeholder="Enter Aadhar Card Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdf">
            Upload patient report
          </label>
          <input
            className="hidden"
            id="pdf"
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              const file = e.target.files[0];
              console.log('Selected file:', file);
              // Handle file upload logic here
            }}
          />
          <label
            htmlFor="pdf"
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            <button onClick={handleButtonClick}>Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
           
          </label>
        </div>
        {/* Add more fields for other details as needed */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
