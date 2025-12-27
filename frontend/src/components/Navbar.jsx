import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          className="text-2xl font-bold cursor-pointer"
        >
          Settlr
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>

          <Link
            to="/login"
            className="px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Home
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
