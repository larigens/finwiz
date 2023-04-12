import React from 'react';
import './Client_dashboard.css';
import { AgingChart } from '../Charts/AgingChart';
import Doughnutchart from '../Charts/Doughnutchart';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Client_dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 d-flex justify-content-center ">
            <AgingChart />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Doughnutchart />
          </div>
        </div>
        <div className="row my-5 pb-5">
          <div className="col-lg-5 ms-5 mt-5">
            <div className="invoice">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fs-5 fw-bold">
                    Search Invoice
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Search invoices here"
                    className="py-3"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="srch btn btn-lg"
                >
                  Search
                </Button>
              </Form>
            </div>
            <div className="add_invoice mt-5">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fs-5 fw-bold">
                    Add new Invoice
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Add new invoice here"
                    className="py-3"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="srch btn btn-lg"
                >
                  Add
                </Button>
              </Form>
            </div>
            <div className="add_broker mt-5">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fs-5 fw-bold">
                    Search for Brokers
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Search here"
                    className="py-3"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="srch btn btn-lg"
                >
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Client_dashboard;
