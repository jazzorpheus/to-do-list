import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>To-Do List</h1>
      <div className="links">
        {/* 'Link' from react-router-dom intercepts requests so they are not sent to the backend server */}
        {/* Instead they are handled entirely in the frontend by React */}
        {/* Links still appear as anchor tags in browser */}
        <Link to="/to-do-list">Home</Link>
        <Link className="new-to-do" to="/create">
          New To-Do
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
