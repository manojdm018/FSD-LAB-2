import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <h1>Lab 02: React Navigation</h1>
      <p>Switch between components using React Router</p>

      <div className="nav-buttons">
        <Link className="btn home" to="/">Home</Link>
        <Link className="btn about" to="/about">About</Link>
        <Link className="btn contact" to="/contact">Contact</Link>
      </div>

      <div className="task-box">
        <strong>Lab Task:</strong> Click the buttons above. Notice how the URL
        changes without the page refreshing.
      </div>
    </div>
  );
}

export default Navbar;
