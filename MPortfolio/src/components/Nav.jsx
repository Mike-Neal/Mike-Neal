import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav nav-tabs">

          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('HomePage')}
              className={currentPage === 'HomePage' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('AboutPage')}
              className={currentPage === 'AboutPage' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#apps"
              onClick={() => handlePageChange('AppsPage')}
              className={currentPage === 'AppsPage' ? 'nav-link active' : 'nav-link'}
            >
              Apps
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
