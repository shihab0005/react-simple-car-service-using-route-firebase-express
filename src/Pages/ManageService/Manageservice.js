import React, { useEffect, useState } from 'react';
import { Button, Stack, Table } from 'react-bootstrap';

const Manageservice = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(req => req.json())
            .then(data => setServices(data))
    }, [])

    const handleDeleteService = id => {

        fetch(`http://localhost:5000/services/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("delete Successfully");
                    const remain = services.filter(service => service._id !== id);
                    setServices(remain)
                }
            })
    }

    return (
        <div>
            <h2>All the service list</h2>
            <div className=" containe">
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Update/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service =>
                                <tr key={service._id}>

                                    <td>{service.name}</td>
                                    <td>{service.description}</td>
                                    <td>BDT {service.price}</td>

                                    <Stack direction="horizontal" gap={3}>
                                        <Button variant="primary"
                                        >Update
                                        </Button>
                                        <Button
                                            onClick={() => handleDeleteService(service._id)}
                                            variant="danger">Delete</Button>
                                    </Stack>
                                </tr>)
                        }



                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Manageservice;