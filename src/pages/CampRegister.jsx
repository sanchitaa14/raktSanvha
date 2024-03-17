import React, { useState } from 'react';
import {auth, firestore} from "../firebase"
import {doc, setDoc} from "@firebase/firestore"

    export default function CampRegistrationForm() {
        const [orgType, setOrgType] = useState();
        const [orgName, setOrgName] = useState();
        const [orgMob, setOrgMob] = useState();
        const [orgEmail, setOrgEmail] = useState();
        const [campName, setCampName] = useState();
        const [campAdd, setCampAdd] = useState();
        const [statee, setStatee] = useState();
        const [district, setDistrict] = useState();
        const [city, setCity] = useState();
        const [date, setDate] = useState();
        const [startTime, setStartTime] = useState();
        const [endTime, setEndTime] = useState();
        const [part, setPart] = useState();

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            let data = {
                orgType: orgType,
                orgName: orgName,
                orgMob: orgMob,
                orgEmail: orgEmail,
                campName: campName,
                state: statee,
                district: district,
                city: city,
                date: date,
                startTime: startTime,
                endTime: endTime,
                part: part
            }
        
            if(auth.currentUser)
            {
                const docRef = doc(firestore, "camp-data", auth.currentUser.email);
        
                try{
                   await setDoc(docRef, data); 
        
                   console.log("Submitted!");
                }
                catch (err){
                    console.log(err);
                }
            }
          };

          return (
            <div className="container mx-auto py-8">
              <h1 className="text-3xl font-bold mb-4 flex justify-center">Camp Registration Form</h1>
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
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
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
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Organizer Mobile:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="text"
                  name="organizerMobile"
                  value={orgMob}
                  onChange={(e) => setOrgMob(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Organizer Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerEmail"
                  type="text"
                  name="organizerEmail"
                  value={orgEmail}
                  onChange={(e) => setOrgEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Camp Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="text"
                  name="organizerMobile"
                  value={campName}
                  onChange={(e) => setCampName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Camp Address:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="text"
                  name="organizerMobile"
                  value={campAdd}
                  onChange={(e) => setCampAdd(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  State:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="text"
                  name="organizerMobile"
                  value={statee}
                  onChange={(e) => setStatee(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  District:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="text"
                  name="organizerMobile"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  City:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="text"
                  name="organizerMobile"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Proposed Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="date"
                  name="organizerMobile"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Start Time:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="time"
                  name="organizerMobile"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  End Time:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="time"
                  name="organizerMobile"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizerMobile">
                  Estimated Participants:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="organizerMobile"
                  type="number"
                  name="organizerMobile"
                  value={part}
                  onChange={(e) => setPart(e.target.value)}
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

  
