
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/authSlice";
import { useRef, useState } from "react";

import {FaSignOutAlt, FaUser} from 'react-icons/fa'


const UserDropdown = () => {

  const [open , setOpen] = useState(false)
  const timeoutRef = useRef(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

const handleMouseEnter = () =>{
  clearTimeout(timeoutRef.current)
  setOpen(true)
}

const handleMouseLeave = () =>{
  timeoutRef.current = setTimeout(()=>{
    setOpen(false)
  },200)
}

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
      <button
        onClick={()=>setOpen(!open)}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >

        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl shadow">
            <FaUser className="text-sm"/>
          </div>


          <div>
            <h1 className="text-base font-semibold">Saiful</h1>
            <p className="text-sm">Frontend Developer</p>
          </div>
        </div>
    
      </button>
      

      {
        open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>
        )
      }

     
    </div>
  );
};

export default UserDropdown;
