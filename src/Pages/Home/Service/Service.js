import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className='service-card pb-2'>

            <img src={img} alt="" />
            <h3> {name} </h3>
            <h3>Price : BDT {price} </h3>
            <p className='px-3'>Desc : {description} </p>

            <Link to={`/booking/${_id}`}>
                <Button> <i class="fas fa-shopping-cart"></i> Book {name.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;