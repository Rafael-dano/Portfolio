import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="mt-2">
      <ul className="flex space-x-4">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"} 
            end
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
