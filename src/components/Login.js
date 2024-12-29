import { useState, useRef, use } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtoClick = () => {

        // validation of form data

        const message = checkValidData(email.current.value, password.current.value, name.current.value);

        setErrorMessage(message);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="h-screen w-screen object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
                    alt="Background"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute my-36 w-3/12 mx-auto right-0 left-0 bg-black p-12 text-white bg-opacity-70 rounded-md">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700" />)}

                <input ref={email} type="text" placeholder="Email or Phone" className="p-4 my-2 w-full bg-gray-700" />

                <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700" />

                <p className="text-red-500 font-bold text-lg py-2 " >{errorMessage}</p>

                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtoClick} >{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}
                </p>
            </form>
        </div>
    );


};

export default Login;
