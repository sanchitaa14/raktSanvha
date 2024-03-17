import React, { useRef, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const emailRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (confPassword !== password) {
            console.log("Passwords do not match");
            return;
        }

        try {
            const cred = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const userId = cred.user.uid;
            const docRef = doc(firestore, "user-data", userId);

            let data = {
                email: emailRef.current.value,
            };

            await setDoc(docRef, data);

            await signInWithEmailAndPassword(auth, email, password);

            window.location.href = "/create-profile";
        } catch (err) {
            console.log(err);
        }
    };

    return (
<div className="mt-50">
  <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-50 ">
    {/* Email */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        ref={emailRef}
        placeholder="Your email address..."
        onChange={(e) => setEmail(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>

    {/* Password */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Your password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>

    {/* Confirm Password */}
    <div className="mb-6">
      <label htmlFor="confPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
      <input
        id="confPassword"
        type="password"
        placeholder="Re-enter the password..."
        value={confPassword}
        onChange={(e) => setConfPassword(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div className="mb-6">
  <label htmlFor="loginType" className="block text-gray-700 text-sm font-bold mb-2">Login type</label>
  <select
    id="loginType"
    value={confPassword}
    // onChange={(e) => setConfPassword(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    required
  >
    <option value="">Select Account Type</option>
    <option value="hospital">Hospital</option>
    <option value="individual">Individual</option>
    <option value="blood_bank">Blood Bank</option>
  </select>
</div>

    {/* Submit */}
    <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
      <a href="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an account?</a>
    </div>
  </form>
</div>

    );
}

export default Register;