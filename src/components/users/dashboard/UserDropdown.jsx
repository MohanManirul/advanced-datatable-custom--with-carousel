import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/authSlice";
import { useRef, useState } from "react";

import { FaUser, FaSignOutAlt } from "react-icons/fa";

const UserDropdown = () => {
  const [open, setOpen] = useState(false); // new
  const timeoutRef = useRef(null); // new

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  // new
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  // new
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // slight delay for better UX
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className="relative inline-block text-left" // new
      onMouseEnter={handleMouseEnter} // new
      onMouseLeave={handleMouseLeave} // new
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl shadow">
            <FaUser className="text-sm" />
          </div>
          <div>
            <h4 className="text-base font-semibold">John Doe</h4>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
