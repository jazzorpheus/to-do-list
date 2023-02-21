// To run json server:    json-server --watch data/db.json --port 8000
// In production mode make database requests to:  https://violet-moth-hose.cyclic.app/toDos

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import NotFound from "./NotFound";

function App() {
  return (
    // Wrap all our components with the react router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Makes sure only one route shows at any one time */}
          <Routes>
            {/* Display Homepage when url path is '/' */}
            {/* 'exact' is required to stop it matching this route when trying to access '/create' */}
            <Route exact path="/to-do-list" element={<Home />} />
            {/* Display Create page when url path is '/create' */}
            <Route path="/create" element={<Create />} />
            {/* If no paths matched, * catches request and sends to Not Found page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Export component function so it can be used elsewhere, e.g. in index.js
export default App;
