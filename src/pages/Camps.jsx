import React from 'react';

export default function Camps() {
  // Dummy data for camps
  const campsData = [
    { name: "Rakt Aarogya Raktdaan", location: "Sector-16 Rohini", date: "2024-03-20" },
    { name: "Blood Centre, Lions Blood Centre", location: "East Delhi", date: "2024-03-22" },
    { name: "Indian Red Cross Society", location: "Central Delhi", date: "2024-03-25" },
    { name: "Khushi Pal Raktdaan Kendra", location: "West Delhi", date: "2024-03-28" },
    { name: "Sunshine Valley Blood Camp", location: "Shahdara", date: "2024-03-30" },
    { name: "Megha Anant Raktdaan", location: "Central Delhi", date: "2024-04-02" },
    { name: "Menka Society", location: "South West Delhi", date: "2024-04-05" },
    // Add more camps as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 mx-8">Upcoming Camps</h1>
      <table className="min-w-full divide-y divide-gray-200 mx-8">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Camp Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3"></th> {/* Placeholder for registration column */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {campsData.map((camp, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{camp.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{camp.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{camp.date}</td>
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
