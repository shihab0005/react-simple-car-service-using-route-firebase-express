import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [book, setBook] = useState({});

    const url = `http://localhost:5000/services/${serviceId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])
    return (
        <div>
            <h3>This is booking for : {serviceId}</h3>
            <h1>{book.name}</h1>
            <h1>{book.price}</h1>
            <h1>{book.decsription}</h1>
            <img src={book.img} alt="" />
        </div>
    );
};

export default Booking;