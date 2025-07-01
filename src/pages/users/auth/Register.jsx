import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../features/authSlice';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login({email}));
        navigate("/user/dashboard")

    }
    return (
         <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-80'>
                <h2 className='text-2xl mb-4 font-bold'>Register</h2>

                <input                 
                type="email"
                placeholder='Email'
                className='w-full border p-2 mb-3'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required                
                />

                <input                 
                type="password"
                placeholder='Password'
                className='w-full border p-2 mb-3'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required                
                />

                <button className='bg-green-500 text-white w-full p-2 rounded hover:bg-green-600'>
                    Register
                </button>

                <p className='text-sm mt-3 text-center'>
                    Don't have an account?{" "}
                    <Link to="/login" className='text-blue-500'>
                       Login
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default Register;