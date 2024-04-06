
import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-white"> ChatApp</span>
        </h1>

        <form>
          <div className="mt-4">
            <label className="block pb-2 text-white">
              <span className="text-lg">Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className="w-full h-10 px-2 border border-white border-opacity-10"
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
            />
          </div>
          <Link to='/signup' className="block mt-2 text-sm text-white opacity-70 hover:opacity-100">
            {"Don't"} have an account?
          </Link>
          <div className="mt-4">
            <button className="w-full py-2 bg-white text-black rounded-md focus:outline-none">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
