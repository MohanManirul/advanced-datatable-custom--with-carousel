import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";

const LeftSidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (
        <div>
            <button
          onClick={toggleSidebar}
          className="text-2xl text-white mb-4 focus:outline-none"
        >
           Welcome to User Dashboard   <FaBars />
        </button>
            <nav className='flex flex-col space-y-2' >

                <Link to="#" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                    🏠 Home
                </Link>

                <Link to="#" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
                    ⚙️ Settings
                </Link>

                <Link to="#" className='hover:bg-gray-700 px-4 py-2 rounded text-left'>
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