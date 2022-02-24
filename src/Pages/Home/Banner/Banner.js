import React from 'react';
import { Carousel } from 'react-bootstrap'
const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/mechanical-services-car_1284-17060.jpg?w=740"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/car-wash-advertising-banner_1409-962.jpg?w=900"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/isometric-car-tire-service-composition-with-professional-workers-process-automobile-repair-different-car-models-types-frame_1284-35082.jpg?w=740"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;