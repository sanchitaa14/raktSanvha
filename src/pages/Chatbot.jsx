// import React, { useState } from 'react';

// function Greet() {
//   return (
//     <div>
//       <h1>Hi! I'm your friendly jevanrekha bot.</h1>
//       <p>How can I help you today?</p>
//     </div>
//   );
// }

// function CheckEligibility() {
//   const [age, setAge] = useState(0);
//   const [lastDonation, setLastDonation] = useState('');

//   const handleAgeChange = (event) => {
//     setAge(parseInt(event.target.value));
//   };

//   const handleLastDonationChange = (event) => {
//     setLastDonation(event.target.value.toLowerCase());
//   };

//   // Implement eligibility check logic based on age and last donation
//   const isEligible = age >= 18 && lastDonation === 'no';

//   return (
//     <div>
//       <h2>Eligibility Check</h2>
//       <p>What is your age?</p>
//       <input type="number" value={age} onChange={handleAgeChange} />
//       <p>Have you donated blood in the last 8 weeks?</p>
//       <input type="radio" name="lastDonation" id="yes" value="yes" onChange={handleLastDonationChange} />
//       <label htmlFor="yes">Yes</label>
//       <input type="radio" name="lastDonation" id="no" value="no" onChange={handleLastDonationChange} />
//       <label htmlFor="no">No</label>
//       {isEligible && <p>You seem eligible to donate! Let's find a blood bank near you.</p>}
//     </div>
//   );
// }