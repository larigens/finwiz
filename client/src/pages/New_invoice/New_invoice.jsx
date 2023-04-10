import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function New_invoice() {
    return (
        <div>
            <div className="container">
                <div
                    className="row mt-5 py-5 justify-content-center rounded rounded-4 "
                    style={{ background: '#3658A7' }}
                >
                    <h2 className="text-white text-center fw-bold">Add Invoice</h2>
                    <div className="col-lg-5 mt-5">
                        <Form.Label className="fs-5 fw-bold text-white">Brokers</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            className="py-2"
                            size="lg"
                        >
                            <option className="fs-4">Broker</option>
                            <option className="fs-4" value="1">
                                Able Broker
                            </option>
                            <option className="fs-4" value="2">
                                Little Home Broker
                            </option>
                            <option className="fs-4" value="3">
                                The Smart Broker
                            </option>
                        </Form.Select>
                        <Form className="w-100 mt-5">
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-5 fw-bold text-white">
                                    Invoice price
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Write Invoice price"
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
                        </Form>
                    </div>
                    <div className="col-lg-5 mt-5">
                        <Form.Label className="fs-5 fw-bold text-white">Carries</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            className="py-2"
                            size="lg"
                        >
                            <option className="fs-4">Carries</option>
                            <option className="fs-4" value="1">
                                Carries 1
                            </option>
                            <option className="fs-4" value="2">
                                Carries 2
                            </option>
                            <option className="fs-4" value="3">
                                Carries 3
                            </option>
                        </Form.Select>
                        <div className='d-flex gap-3'>
                            <Form className="w-100 mt-5">
                                <Form.Group className="mb-3">
                                    <Form.Label className="fs-5 fw-bold text-white">
                                        Invoice Date
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        className="py-2"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn btn-lg px-3 fw-bold"
                                    style={{ background: '#98B5FF' }}
                                >
                                    Update
                                </Button>
                            </Form>
                            <Form className="w-100 mt-5">
                                <Form.Group className="mb-3">
                                    <Form.Label className="fs-5 fw-bold text-white">
                                        Invoice Due Date
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        className="py-2"
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn btn-lg px-3 fw-bold"
                                    style={{ background: '#98B5FF' }}
                                >
                                    Update
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <h3 className='text-white mt-5 text-center'>$26,083</h3>
                </div>
            </div>
        </div>
    );
}

export default New_invoice;
