import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'
const About = () => {
    const color = [
        'Primary',
        'Primary',
        'Primary',
        'Primary',


    ]
    return (
        <div className='about_container ' id="about">
            <h2>About Master Of Cars</h2>
            <div className="about container">
                {
                    color.map((variant, idx) => (
                        <Card
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Engine Fixer</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Engine Fix  </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>


        </div>
    );
};

export default About;