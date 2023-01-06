import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <span className="sr-only">Budget Tracker</span>
      <p className="text-2xl font-bold">
      Budget <span className="text-blue-600">Tracker</span>
      </p>
    </Link>
  );
};

export default Logo;
