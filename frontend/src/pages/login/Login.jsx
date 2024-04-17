import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import useLogin from "../../Hooks/useLogin"; 

const Login = () => {
  const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(userName, password);
	};
  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-white"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block pb-2 text-white">
              <span className="text-lg">UserName</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className="w-full h-10 px-2 border border-white border-opacity-10"
              value={userName}
							onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block pb-2 text-white">
              <span className="text-lg">Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className="w-full h-10 px-2 border border-white border-opacity-10"
              value={password}
							onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to='/signup' className="block mt-2 text-sm text-white opacity-70 hover:opacity-100">
            {"Don't"} have an account?
          </Link>
          <div className="mt-4">
            <button className="w-full py-2 bg-white text-black rounded-md focus:outline-none" disabled={loading}>
            {loading ? <span className='loading loading-spinner '></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
