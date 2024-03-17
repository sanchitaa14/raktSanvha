import React from 'react';
// import profilePic from './profile.jpg'; // Import your profile picture
// import bloodReportPic from './blood-report.jpg'; // Import your blood report picture
import profile from "../assets/profile.jpg"
export default function Profile() {
  return (
    <div className="bg-gradient-to-b from-indigo-500 to-indigo-700 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl">
        <div className="flex items-center justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">Mahima Chauhan</h1>
            <p className="text-gray-600">Blood Type: O+</p>
          </div>
        </div>

        <hr className="my-6" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Donations Made</h2>
            <ul>
              <li className="mb-2">
                <span className="text-gray-700 mr-2">Date:</span> March 5, 2024<br/>Februrary 5, 2024<br/>January 5, 2024
              </li>
              {/* Add more donation entries as needed */}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Donation</h2>
            <p className="text-gray-700 mb-2">Date: March 5, 2024</p>
            {/* Add blood report photo display */}
            <img
              src=""
              alt="Blood Report"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <hr className="my-6" />

        <div>
          <h2 className="text-xl font-semibold mb-2">Account Created On</h2>
          <p className="text-gray-700">April 1, 2024</p>
        </div>
        <hr className="my-6" />

        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => alert('You are now an organ donor!')}
          >
            Become an Organ Donor
          </button>
        </div>
      </div>
    </div>
  );
}
