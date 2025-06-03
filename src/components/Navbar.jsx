import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-200">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/signup" className="mr-4">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
