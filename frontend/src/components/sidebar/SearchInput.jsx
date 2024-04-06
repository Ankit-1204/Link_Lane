import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type='text' placeholder='Search…' className='w-full py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:bg-white focus:ring focus:border-sky-500' /> {/* Modified input classes */}
            <button type='submit' className='btn btn-primary'> {/* Modified button classes */}
                <IoSearchSharp className='w-6 h-6 text-white' />
            </button>
        </form>
    );
}
export default SearchInput;
