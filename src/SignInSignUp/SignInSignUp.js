import React, { useEffect, useRef, useState } from "react";
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";

function SignInSignupWithLocalStorage() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const localSignUp = localStorage.getItem("signUp");

    // UseEffect to check if the user is already signed in
    useEffect(() => {
        if (localSignUp) {
            setIsAuthenticated(true);
        }
    }, [localSignUp]); // Add localSignUp to the dependency array to avoid infinite loops

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            alert("Account Created Successfully");
            navigate("/"); // Navigate without reloading the page
        }
    };

    if (isAuthenticated) {
        return <Home />; // If user is authenticated, render the Home component
    }

    return (
        <div className="h-screen flex items-center justify-center flex-col bg-red-100">
            <div className="input_space">
                <input
                    placeholder="Name"
                    type="text"
                    ref={name}
                    className="border border-black mb-5 py-2 w-96 px-5"
                />
            </div>
            <div className="input_space">
                <input
                    placeholder="Email"
                    type="email"
                    ref={email}
                    className="border border-black mb-5 py-2 w-96 px-5"
                />
            </div>
            <div className="input_space">
                <input
                    placeholder="Password"
                    type="password"
                    ref={password}
                    className="border border-black mb-5 py-2 w-96 px-5"
                />
            </div>
            <button
                onClick={handleClick}
                className="border border-black w-56 py-2 bg-red-300 text-white"
            >
                Sign Up
            </button>
        </div>
    );
}

export default SignInSignupWithLocalStorage;
