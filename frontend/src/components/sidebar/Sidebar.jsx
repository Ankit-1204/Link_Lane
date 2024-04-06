import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
    return (
        <div className='w-80 border-r border-slate-500 p-4 flex flex-col'> {/* Adjusted width to w-80 */}
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations/>
            <LogoutButton/>
         
        </div>
    )
};
export default Sidebar;
