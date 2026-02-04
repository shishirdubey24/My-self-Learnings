import { useState } from 'react';
import axios from "axios"
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Registration = () => {
  const[Input,setInput]=useState({});
 
const handleInput=(e)=>{
  setInput({...Input,[e.target.name]:e.target.value})
}
 const handleForm=async(e)=>{
  e.preventDefault();

  try {
    const response=await axios.post("http://localhost:5000/auth/signup",Input)
console.log("Data has been sent",response)
  } catch (error) {
    console.log(error)
  }

  }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
        </div>

        {/* Form Card */}
        
        <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          <form className="space-y-6" onSubmit={handleForm}>
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                 Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                  name="name"
                   value={Input?.name ||""}
                  onChange={handleInput}
                 
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                  name='email'
                  value={Input?.email||""}
                    onChange={handleInput}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
               <input
                   type="password"
                 className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Create a strong password"
                  required
                    name="password"   
                     value={Input?.password || ""}  
                       onChange={handleInput}
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition duration-200"
            >
              Create Account
            </button>
          </form>    
        </div>
      </div>
    </div>
  );
};

export default Registration;
