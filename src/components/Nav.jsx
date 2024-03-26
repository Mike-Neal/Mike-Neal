import React from "react";
import '../components/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
      <div className="container-fluid">
        
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
        <p className="navbar-brand" href="#">
        Michael  <img src="./images/Profile Pic Baldy.jpg" width={100} height={100}/> Neal </p>
          <img src="./images/blueDragon.jpg" width={200} height={100} />
      </div>
    </nav>
  );
}

export default NavTabs;
