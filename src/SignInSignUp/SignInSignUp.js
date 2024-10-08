import React, { useEffect, useRef, useState } from "react";
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";

function SignInSignupWithLocalStorage() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const [showHome, setShowHome] = useState(false);
    const [show, setHome] = useState(false);
    
   
    const localSignUp = localStorage.getItem('signUp');
    const localEmail = localStorage.getItem('email');


    useEffect(() => {
        if (localSignUp) {
            setShowHome(true); 
        }
        if(localEmail){
             setHome(true)
        }
    }); 

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            alert("Account Created Successfully");
            window.location.reload();
            navigate('/'); 
        }
    };

    return (
        <div>
            {showHome ? <Home /> :
            (show ?
                <div className="h-screen flex items-center justify-center flex-col bg-red-100">
                    <div className="input_space">
                        <input placeholder="Name" type='text' ref={name} className="border border-black mb-5 py-2 w-96 px-5"  />
                    </div>
                    <div className="input_space">
                        <input placeholder="email" type='text' ref={email} className="border border-black mb-5 py-2 w-96 px-5" />
                    </div>
                    <div className="input_space">
                        <input placeholder="password" type='password' ref={password} className="border border-black mb-5 py-2 w-96 px-5" />
                    </div>
                    <button onClick={handleClick}  className="border border-black w-56 py-2 bg-red-300 text-white">Sign Up</button>
                </div>
                :

                <div className="h-screen flex items-center justify-center flex-col bg-red-100">
                <div className="input_space">
                    <input placeholder="Name" type='text' ref={name} className="border border-black mb-5 py-2 w-96 px-5" />
                </div>
                <div className="input_space">
                    <input placeholder="email" type='text' ref={email} className="border border-black mb-5 py-2  w-96 px-5" />
                </div>
                <div className="input_space">
                    <input placeholder="password" type='password' ref={password} className="border border-black mb-5 py-2 w-96 px-5" />
                </div>
                <button onClick={handleClick} className="border border-black w-56 py-2 bg-red-300 text-white">Sign Up</button>
            </div>)
            }
        </div>
    );
}

export default SignInSignupWithLocalStorage;
