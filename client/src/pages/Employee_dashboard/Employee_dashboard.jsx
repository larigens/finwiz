import React from 'react';
import './Employee_dashboard.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Employee_dashboard() {
    return (
        <div>
            <div className="container mt-5" style={{ background: '#98B5FF' }}>
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10">
                        <div
                            className="py-5 px-5 rounded rounded-4 "
                            style={{ background: '#3658A7' }}
                        >
                            <h1 className="text-white text-center ">Employee Dashboard</h1>
                            <Form className="w-100 mt-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fs-5 fw-bold text-white">
                                        Search
                                    </Form.Label>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search Invoices , Brokers and Carriers here"
                                        className="py-2 all"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn btn-lg px-4"
                                    style={{ background: '#98B5FF' }}
                                >
                                    Search
                                </Button>
                            </Form>
                            <div className="addition d-flex gap-4 mt-5">
                                <div className='w-75'>
                                    <Form className="add_invoice w-100">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="fs-5 fw-bold text-white">
                                                Add new Invoice
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Add new Invoice here"
                                                className="py-2"
                                            />
                                        </Form.Group>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="btn btn-lg px-4"
                                            style={{ background: '#98B5FF' }}
                                        >
                                            Add
                                        </Button>
                                    </Form>
                                    <Form className="add_invoice w-100 mt-5">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="fs-5 fw-bold text-white">
                                                Update/Delete Invoice
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Write Invoice here"
                                                className="py-2"
                                            />
                                        </Form.Group>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="btn btn-lg px-4 fw-bold"
                                            style={{ background: '#98B5FF' }}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="btn btn-lg px-4 ms-5 fw-bold"
                                            style={{ background: '#98B5FF' }}
                                        >
                                            Delete
                                        </Button>
                                    </Form>
                                </div>
                                <Form className="add_invoice w-75">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="fs-5 fw-bold text-white">
                                            Add new Broker
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add new Broker here"
                                            className="py-2"
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="btn btn-lg px-4"
                                        style={{ background: '#98B5FF' }}
                                    >
                                        Add
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee_dashboard;