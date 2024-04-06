import {Link} from 'react-router-dom'
import GenderCheckbox from "./GenderCheckbox";
import {useState} from 'react';
import useSignup from '../../Hooks/useSignup';
const SignUp = () => {
    const [inputs,setInputs]=useState({
        fullName:'',
        userName:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    const { loading, signup } = useSignup();
    const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs); // Call the signup function returned by useSignup
    };
    return (
        <div className='flex flex-col items-center justify-center min-w-[24rem] mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-white border-opacity-20'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Sign Up <span className='text-white-500'> ChatApp</span>
                </h1>

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className='text-white text-lg'>Full Name</label>
                        <input 
                        type='text' 
                        placeholder='John Doe' 
                        className='w-full input input-bordered h-10 mt-1'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                         />
                    </div>

                    <div className="mb-4">
                        <label className='text-white text-lg'>Username</label>
                        <input 
                        type='text' 
                        placeholder='johndoe' 
                        className='w-full input input-bordered h-10 mt-1'
                        value={inputs.userName}
						onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                         />
                    </div>

                    <div className="mb-4">
                        <label className='text-white text-lg'>Password</label>
                        <input 
                        type='password' 
                        placeholder='Enter Password' 
                        className='w-full input input-bordered h-10 mt-1'
                        value={inputs.password}
						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className='text-white text-lg'>Confirm Password</label>
                        <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        className='w-full input input-bordered h-10 mt-1' 
                        value={inputs.confirmPassword}
						onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                       />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to={"/login"}className='text-white-600 hover:underline  hover:text-blue-600 mt-2 inline-block' href='#'>
                        Already have an account?
                    </Link>
                    <div className="mt-4">
                        <button className='bg-white text-black px-8 py-3 text-base font-medium rounded-md hover:bg-gray-200 transition duration-300 ease-in-out'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;
