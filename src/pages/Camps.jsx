import React from 'react';

export default function Camps() {
  // Dummy data for camps
  const campsData = [
    { name: "Camp 1", location: "Location 1" },
    { name: "Camp 2", location: "Location 2" },
    { name: "Camp 3", location: "Location 3" },
    // Add more camps as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Camps</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-10 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Camp Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3"></th> {/* Placeholder for registration column */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {campsData.map((camp, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{camp.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{camp.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Register
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
