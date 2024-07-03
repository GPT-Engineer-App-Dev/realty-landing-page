import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Building, Info, Phone } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
          <nav className="hidden md:flex space-x-4">
            <NavItem to="/" icon={<Home className="h-5 w-5" />}>Home</NavItem>
            <NavItem to="/properties" icon={<Building className="h-5 w-5" />}>Properties</NavItem>
            <NavItem to="/about" icon={<Info className="h-5 w-5" />}>About Us</NavItem>
            <NavItem to="/contact" icon={<Phone className="h-5 w-5" />}>Contact</NavItem>
          </nav>
        </div>
        <Button variant="primary">Get Started</Button>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="mt-4">
          <p>&copy; 2023 Real Estate Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center space-x-2 transition-colors",
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      )
    }
  >
    {icon}
    <span>{children}</span>
  </NavLink>
);

export default Layout;
