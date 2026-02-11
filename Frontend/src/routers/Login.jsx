import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from "axios";
const Login = () => {
 const [Input, setInput] = useState({ email: "", password: "" });
   const navigate = useNavigate();
const handleInput=(e)=>{
  setInput({ ...Input, [e.target.name]: e.target.value})
}
const handleform=async(e)=>{
 e.preventDefault();
try {
  const res= await axios.post("http://localhost:5000/auth/login",Input,{
    withCredentials: true,
  })
  console.log("Login",res);
 
  navigate('/');
} catch (error) {
  console.log(error)
}
}

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h2>
        <p className="text-gray-600 mb-6 text-center">Sign in to your account</p>

        <form className="space-y-4" onSubmit={handleform}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                name='email'
                value={Input?.email||""}
                type="email"
                onChange={handleInput}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
               name='password'
               value={Input?.password||""}
                type="password"
                 onChange={handleInput}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <button className="text-gray-900 font-medium hover:underline">
            Create one
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;
