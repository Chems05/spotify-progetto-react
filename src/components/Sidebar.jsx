import React from "react";
import { Link } from "react-router-dom";
import spotifyIcon from "../assets/logo/logo.png";

const Sidebar = ({ searchTerm, setSearchTerm, onSearch, onReset }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <aside className="col">
      <nav className="navbar navbar-expand-md fixed-left " id="sidebar">
        <div className="container flex-column align-items-start">
          <Link className="navbar-brand" to="/" onClick={onReset}>
            <img src={spotifyIcon} alt="Spotify Logo" width="131" height="60" />
          </Link>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <ul>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-success btn-sm h-100"
                        onClick={() => onSearch(searchTerm)}
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
