import Navbar from "../../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Register = () => { 

    // useState 
    const [form, setForm] = useState({
        username: "",
        email: "", // Ensure you have email field in your form state
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const navigate = useNavigate();

    // function
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await axios.post("https://reqres.in/api/login", form);
            console.log(res); 

            setSuccess("Register Success!");

            setTimeout(() => {
                setSuccess("");
                navigate("/login");
            }, 3000);

        } catch (error) {
            console.error(error.response);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError("Something went wrong. Please try again.");
            }
    
            setTimeout(() => {
                setError("");
            }, 2000);
        } finally {
            setLoading(false);
        }
    };
    
    console.log(form); 
    
    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    {/* heading */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                        <p className="mb-4 text-sm text-center text-gray-600">Create a New Account</p>
                    </div>

                    <div className="py-5">
                        {/* Display error message */}
                        {error && (<p className="px-2 text-xs text-red-500 bg-red-200 rounded-md w-fit">{error}</p>)} 
                                            
                        {/* Display success message */}
                        {success && (<p className="px-2 text-xs text-green-500 bg-green-200 rounded-md w-fit">{success}</p>)}
                    </div>
                    
                    {/* Form */}
                    <form className="space-y-4">
                        {/* Username Input */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your username"
                                required
                                onChange={handleChange} 
                            /> 
                        </div>

                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                                required
                                onChange={handleChange} 
                            /> 
                        </div>
                    
                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle password visibility
                                    className="absolute inset-y-0 text-sm text-gray-500 right-3 hover:text-blue-500">
                                    {isPasswordVisible ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white rounded-lg bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            onClick={handleRegister}
                            disabled={loading}>
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>

                </div>
            </div>

            <Footer/>
        </div>  
    )
}

export default Register;
