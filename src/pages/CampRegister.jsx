import React, { useState } from 'react';

const initialFormState = {
  organizationType: '',
  organizationName: '',
  organizerName: '',
  organizerMobile: '',
  organizerEmail: '',
  coOrganizerName: '',
  coOrganizerMobile: '',
  campName: '',
  campAddress: '',
  state: '',
  district: '',
  cityName: '',
  bloodBank: '',
  campProposeDate: '',
  startTime: '',
  endTime: '',
  latitude: '',
  longitude: '',
  estimatedParticipants: '',
  referenceSupporter: '',
  remarks: ''
};

export default function CampRegistrationForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add further logic for form submission here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Camp Registration Form</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Organization details */}
        {/* Add other form fields as needed */}
        {/* Organization Type */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizationType">
            Organization Type:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organizationType"
            type="text"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            required
          />
        </div>
        {/* Organization Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizationName">
            Organization Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organizationName"
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Organizer Name */}
        {/* Organizer Mobile */}
        {/* Organizer Email */}
        {/* Co-Organizer Name */}
        {/* Co-Organizer Mobile */}
        {/* Camp Name */}
        {/* Camp Address */}
        {/* State */}
        {/* District */}
        {/* City Name */}
        {/* BloodBank */}
        {/* Camp Propose Date */}
        {/* Start Time */}
        {/* End Time */}
        {/* Latitude */}
        {/* Longitude */}
        {/* Estimated Participants */}
        {/* Reference/Camp Supporter */}
        {/* Remarks */}
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
