import React from 'react';
import './Payment_form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Payment_form() {
    return (
        <div>
            <div className="container mt-5" style={{ background: '#98B5FF' }}>
                <div className="row justify-content-center py-5">
                    <div className="col-lg-7">
                        <div
                            className="py-5 px-5 rounded rounded-4 "
                            style={{ background: '#3658A7' }}
                        >
                            <h1 className="text-white text-center ">Pay With Card</h1>
                            <Form className="w-100 mt-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fs-5 fw-bold text-white">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="@email"
                                        className="py-2 all"
                                    />
                                </Form.Group>
                            </Form>
                            <div className="addition mt-5">
                                <div className="w-100">
                                    <Form className="add_invoice w-100">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="fs-5 fw-bold text-white">
                                                Card Information
                                            </Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="1234 1234 1234 1234"
                                                className="py-2"
                                            />
                                        </Form.Group>
                                    </Form>
                                    <div className="d-flex">
                                        <Form.Control
                                            type="number"
                                            placeholder="MM/YY"
                                            className="py-2 "
                                        />
                                        <Form.Control
                                            type="number"
                                            placeholder="CVC"
                                            className="py-2 "
                                        />
                                    </div>
                                </div>
                                <Form className="add_invoice w-100 mt-5">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="fs-5 fw-bold text-white">
                                            Name On Card
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Write Name here"
                                            className="py-2"
                                        />
                                    </Form.Group>
                                </Form>

                                <Form.Label className="fs-5 fw-bold text-white mt-4">
                                    Country or region
                                </Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="py-2"
                                    size="lg"
                                >
                                    <option className="fs-4">USA</option>
                                    <option className="fs-4" value="1">
                                        xyz
                                    </option>
                                    <option className="fs-4" value="2">
                                        xyz
                                    </option>
                                    <option className="fs-4" value="3">
                                        xyz
                                    </option>
                                </Form.Select>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn px-4 w-100 mt-5 fw-bold fs-4"
                                    style={{ background: '#98B5FF' }}
                                >
                                    Pay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment_form;
