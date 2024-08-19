import NightModeToggle from "src/components/NightModeToggle";
import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar";

const Layout: React.FC = () => {
  return (
    <div className="relative">
      {/* <NightModeToggle /> */}
      <Navbar />

      <div className="pt-1 max-w-7xl mx-auto relative z-0">
        {/* An <Outlet> renders the active route component, such as <Home /> or <Contact /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
