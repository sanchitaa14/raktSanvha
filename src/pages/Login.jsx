import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // to not lose state of email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log("LoggedIn");
                window.location.href = "/";
            })
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });
    };

    return (
        <div className="mt-20 flex justify-center">
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Registered email address..."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border px-4 py-2"
                ></input>

                {/* Password */}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border px-4 py-2"
                ></input>

                {/* Submit */}
                <button type="submit">Log In</button>

                {/*Signup*/}
                <a href="/register">Don't have an account?</a>
            </form>
        </div>
    );
}

export default Login;