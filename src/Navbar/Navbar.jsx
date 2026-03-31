import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold border-b-2 border-purple-600"
      : "text-gray-600 hover:text-purple-600";

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

     
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-purple-600">
            HERO.IO
          </span>
        </Link>

       
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/apps" className={navLinkClass}>
            Apps
          </NavLink>

          <NavLink to="/installations" className={navLinkClass}>
            Installation
          </NavLink>
        </nav>

     
        <div className="hidden md:block">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Contribute
          </a>
        </div>

      
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 flex flex-col gap-4">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Apps
          </NavLink>

          <NavLink
            to="/installations"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Installation
          </NavLink>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Contribute
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;