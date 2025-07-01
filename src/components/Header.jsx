import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link>
          <h2 className="text-xl font-bold">Amar Ukil</h2>
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </Link>
 
          <Link to="/login" className="text-gray-700 hover:text-blue-500">
            Login
          </Link>

          <Link to="/register" className="text-gray-700 hover:text-blue-500">
            Register
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
