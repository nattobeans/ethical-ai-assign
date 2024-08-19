import { Link } from "react-router-dom";
import { navLinks } from "src/constants";
import { logo } from "src/assets";
import NightModeToggle from "src/components/NightModeToggle";
import { useAuth } from "src/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(false);
    navigate("/");
  };

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="EthicalAI Logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-[18px] font-bold cursor-pointer">Ethical AI</p>
        </Link>

        <div className="flex items-center justify-end">
          <ul className="list-none hidden sm:flex flex-row gap-10 pr-2">
            {isAuthenticated && (
              <>
                {navLinks.map((navLink) => (
                  <li>
                    <Link to={`/${navLink.id}`}>{navLink.title}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <button onClick={(e) => handleLogout(e)}>Logout</button>
              </>
            )}
            {!isAuthenticated && (
              <>
                {navLinks.map((navLink) => (
                  <>
                    <li>
                      <Link to={`/${navLink.id}`}>{navLink.title}</Link>
                    </li>
                  </>
                ))}
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
          <NightModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
