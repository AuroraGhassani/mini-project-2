import Navbar from "../../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Login = () => { 

    //useState
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate();

    //function 
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
    
        try {
            const res = await axios.post("https://reqres.in/api/login", form);
            console.log(res);
            localStorage.setItem("access_token", res.data.token);
    
            setSuccess("Login Success!");
    
            setTimeout(() => {
                setSuccess("");
                navigate("/dashboard/");
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
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md ">
                    {/* heading */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-center text-gray-800">Login </h2>
                        <p className="mb-4 text-sm text-center text-gray-600">
                        Enter your credentials to access your account.</p>
                    </div>

                    {/* error & success message */}
                    <div className="flex justify-center py-2">
                        {error && (<p className="px-2 text-xs text-red-500 bg-red-200 rounded-md w-fit">{error}</p>)} 
                        {success && (<p className="px-2 text-xs text-green-500 bg-green-200 rounded-md w-fit">{success}</p>)}
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="username"
                                id="username"
                                name="username"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your username"
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
                                    type={isPasswordVisible ? "text" : "password"} // Mengubah tipe input
                                    id="password"
                                    name="password"
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
                                    required
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 text-sm text-gray-500 right-3 hover:text-blue-500"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibilitas
                                >
                                    {isPasswordVisible ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white rounded-lg bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                    </form>

                    {/* Links */}
                    <div className="mt-6 text-sm text-center text-gray-600">
                        <p>Don't have an account?{" "}
                            <a href="/register/" 
                                className="text-blue-500 hover:underline">Sign Up</a>
                        </p>
                        <p className="mt-2">
                            <a href="#forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>  
    )
}

export default Login;
