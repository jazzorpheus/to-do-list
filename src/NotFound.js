import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, we can't find that page.</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
