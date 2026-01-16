import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-blue-500 text-2xl font-bold">
            NAPLAN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
