import React, { useState, useEffect } from 'react';

function Data() {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [filteredBloodBanks, setFilteredBloodBanks] = useState([]);
  const [bloodTypeFilter, setBloodTypeFilter] = useState('');

  useEffect(() => {
    // Initialize blood banks data when component mounts
    const data = [
      {
        "name": "Dr BR Ambedkar Blood Bank",
        "address": "Address of Dr BR Ambedkar Blood Bank",
        "A+": 16,
        "A-": 22,
        "B+": 26,
        "B-": 31,
        "AB+": 16,
        "AB-": 7,
        "O+": 39,
        "O-": 43
      },
      {
        "name": "Saroj Super Speciality Hospital",
        "address": "Address of Saroj Super Speciality Hospital",
        "A+": 7,
        "A-": 0,
        "B+": 33,
        "B-": 9,
        "AB+": 14,
        "AB-": 39,
        "O+": 18,
        "O-": 42
      },
      {
        "name": "Brahm Prakash Blood Bank",
        "address": "Address of Brahm Prakash Blood Bank",
        "A+": 6,
        "A-": 7,
        "B+": 45,
        "B-": 13,
        "AB+": 40,
        "AB-": 13,
        "O+": 36,
        "O-": 13
      },
      {
        "name": "Mission Jan Jagriti Blood Bank",
        "address": "Address of Mission Jan Jagriti Blood Bank",
        "A+": 46,
        "A-": 21,
        "B+": 20,
        "B-": 43,
        "AB+": 49,
        "AB-": 47,
        "O+": 48,
        "O-": 15
      },
      {
        "name": "Lions Blood Bank",
        "address": "Address of Lions Blood Bank",
        "A+": 48,
        "A-": 12,
        "B+": 4,
        "B-": 44,
        "AB+": 26,
        "AB-": 50,
        "O+": 41,
        "O-": 7
      }
    ];

    setBloodBanks(data);
    setFilteredBloodBanks(data); // Initialize filteredBloodBanks with all blood banks
  }, []);

  // Function to handle blood type filter change
  const handleBloodTypeFilterChange = (event) => {
    const selectedBloodType = event.target.value;
    setBloodTypeFilter(selectedBloodType);

    // Filter blood banks based on selected blood type
    if (selectedBloodType === '') {
      setFilteredBloodBanks(bloodBanks); // If no blood type selected, show all blood banks
    } else {
      const filteredData = bloodBanks.filter(bloodBank => 
        Object.keys(bloodBank).includes(selectedBloodType) && bloodBank[selectedBloodType] > 0
      );
      setFilteredBloodBanks(filteredData);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Nearby Blood Banks</h1>
        <div className="mt-4">
          <label htmlFor="bloodTypeFilter" className="mr-2">Filter by Blood Type:</label>
          <select
            id="bloodTypeFilter"
            className="border border-gray-400 rounded px-4 py-2"
            value={bloodTypeFilter}
            onChange={handleBloodTypeFilterChange}
          >
            <option value="">All</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBloodBanks.map((bloodBank, index) => (
            <div key={index} className="border border-gray-300 rounded p-4">
              <h2 className="text-lg font-bold">{bloodBank.name}</h2>
              <p className="mt-2">Location: {bloodBank.address}</p>
              <p className="mt-2">Blood Availability:</p>
              <ul>
                {Object.keys(bloodBank).map((bloodType, index) => (
                  bloodType !== 'name' && bloodType !== 'address' && bloodBank[bloodType] > 0 && (
                    <li key={index}>{bloodType}: {bloodBank[bloodType]}</li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Data;
