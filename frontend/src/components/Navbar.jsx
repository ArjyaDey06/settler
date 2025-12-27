import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h2 className="font-bold text-xl">Settlr</h2>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
