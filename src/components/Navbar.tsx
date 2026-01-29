import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Portfolio
          </Link>
          
          <div className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/signin" className="text-gray-700 hover:text-gray-900">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
