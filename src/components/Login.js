
import Header from "./Header";

const Login = () => {


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
            <form className="absolute my-36 w-3/12 mx-auto right-0 left-0 bg-black p-12 text-white bg-opacity-70">
                <h1 className="font-bold text-3xl py-4">Sign In</h1>
                <input type="text" placeholder="Email or Phone" className="p-4 my-2 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700" />
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">Sign In</button>
                <p className="py-4" >New to Netflix? Sign Up Now</p>
            </form>
        </div>
    );


};

export default Login;
