import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className='container mx-auto text-center'>
            <form onSubmit={handleSubmit} className='items-center p-6 text-center bg-slate-100'>
            <h2 className='mb-2 font-bold text-purple-700'>Please Login!!!</h2>
                <label className="flex justify-center input-group">
                    <span>Email</span>
                    <input type="email" placeholder="Your Email" className="shadow-lg input input-bordered" />
                </label>
                <label className="flex justify-center mt-3 input-group">
                    <span>Password</span>
                    <input type="password" placeholder="Your password" className="shadow-lg input input-bordered" />
                </label>
               
                <button className='px-5 py-3 mt-3 font-bold text-white bg-purple-700 rounded-sm shadow-lg' type="submit">Login</button>
            <p className='mt-2'>Don't have any account? <Link className='font-bold text-blue-800' to="/register">Please Register</Link> </p>
            </form>
        </div>
    );
}

export default Login;