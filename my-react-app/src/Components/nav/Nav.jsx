import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="https://www.linkedin.com/in/gabriel-mathura-057383276/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="https://github.com/Takiro78" target="_blank" rel="noopener noreferrer">Git</a></li>
      </ul>
    </div>
  );
}