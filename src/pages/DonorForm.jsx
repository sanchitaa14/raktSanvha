import React, { useState } from 'react';
import { firestore, auth } from '../firebase';
import {doc, setDoc} from "@firebase/firestore";

export default function BloodDonationForm() {
    const [name, setName] = useState();
    const [report, setReport] = useState();
    const [date, setDate] = useState();
    const [preferredTime, setPreferredTime] = useState();
    const [bloodCol, setBloodCol] = useState();

  const handleSubmit = async (e) => {
    if(auth.currentUser) 
    {
        const docRef = doc(firestore, "donor-data", auth.currentUser.email);
    
        let data = {
            name: name,
            report: report, 
            date: date, 
            preferredTime: preferredTime,
            bloodCol: bloodCol
        }

        try {
            await setDoc(docRef, data);

            console.log("Data added successfully!");
        }
        catch (err) 
        {
            console.log(err);
        }
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Blood Donation Appointment Form</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodReport">
            Blood Report Data
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bloodReport"
            type="file"
            name="bloodReport"
            required
            value={report}
            onChange={(e) => setReport(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredDate">
            Preferred Date for Appointment
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="preferredDate"
            type="date"
            name="preferredDate"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredTime">
            Preferred Time for Appointment (9 am - 5 pm)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="preferredTime"
            type="time"
            name="preferredTime"
            min="09:00"
            max="17:00"
            required
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collectionOption">
            Blood Collection Option
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="collectionOption"
            name="collectionOption"
            required
            value={bloodCol}
            onChange={(e) => setBloodCol(e.target.value)}
          >
            <option value="home">Home Collection</option>
            <option value="bloodBank">Visit Blood Bank</option>
          </select>
        </div>
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
