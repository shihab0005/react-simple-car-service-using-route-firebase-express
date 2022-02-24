import React from 'react';
import './Expart.css'
const Expert = ({ expert }) => {
    const { name, charge, img, description, experts } = expert;
    return (
        <div className='single_expart'>

            <img className='img-fluid' src={img} alt="" />
            <h3>{name}</h3>
            <h4>Charges : {charge}</h4>
            <h3 className='text-danger'>Experts in : {experts}</h3>
            <p className='px-3'>{description}</p>
        </div>
    );
};

export default Expert;