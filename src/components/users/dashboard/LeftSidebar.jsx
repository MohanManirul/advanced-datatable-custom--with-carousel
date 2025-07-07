import { Link } from "react-router-dom";

const LeftSidebar = () => {
    return (
        <div>
            Welcome to User Dashboard 
            <nav className='flex flex-col space-y-2' >

                <Link to="/user/dashboard" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                    🏠 Home
                </Link>

                <Link to="#" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                    ⚙️ Settings
                </Link>

                <Link to="/user/dashboard/my-advocates" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                    👥 My Advocates
                </Link>

                <Link to="#" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                    📦 My Cases
                </Link>

                <Link to="#" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                     📊 Reports
                </Link>

            </nav>
        </div>
    );
};

export default LeftSidebar;