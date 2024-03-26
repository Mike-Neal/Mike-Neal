import React from "react";
import { useState } from 'react';
// import { Link } from "react-router-dom";
import Nav from './Nav';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AppsPage from '../pages/AppsPage';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <HomePage />;
        }
        if (currentPage === 'AboutPage') {
            return <AboutPage />;
        }
        return <AppsPage />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="mx-3">{renderPage()}</main>
        </div>
    );
}