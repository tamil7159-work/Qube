import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/applianceList.scss';

const NotFound = () => {
    return (
        <div className={'not-found'}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go back to Appliances</Link>
        </div>
    );
};

export default NotFound;