import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pageNotFound from '../../../src/images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%', height: '100vh' }} src={pageNotFound} alt="" />
            <Link to='/'>
                <Button className='btn-primary'>Back to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;