import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import logo from "../assets/logoBlood.jpg";
import { signOut } from "firebase/auth";


function Nav() {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignout = async () => {
        try {
            await signOut(auth);
            window.location.href = "/login";
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        window.location.href = "/";
    };

    const handleFaq = async (e) => {
        e.preventDefault();
        window.location.href = "/faq";
    };
    const handleCheckout = async (e) => {
      e.preventDefault();
      window.location.href = "/checkout";
  };
  const handleAbout = async (e) => {
    e.preventDefault();
    window.location.href = "/about";
};
const handleCode = async (e) => {
    e.preventDefault();
    window.location.href = "/code";
};



    return (
        <div id="nav" className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="nav-logo">
                    <img src={logo} alt="logo" className="cursor-pointer" onClick={handleClick} />
                </div>
                <div className="nav-buttons flex space-x-4">
                    <button className="hover:underline" onClick={handleClick}>Profile</button>
                    <button className="hover:underline" onClick={handleAbout}>About us</button>
                    <button className="hover:underline" onClick={handleFaq}>FAQs</button>
                    <button className="hover:underline" onClick={handleCode}></button>
                    <button className="hover:underline" onClick={handleCheckout}></button>
                </div>
                <div className="nav-signout">
                    {userEmail ? (
                        <div className="flex items-center space-x-2">
                            <p>{userEmail}</p>
                            <button onClick={handleSignout} className="hover:underline">Signout</button>
                        </div>
                    ) : (
                        <button className="hover:underline" onClick={() => window.location.href = "/login"}>Login</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Nav;
