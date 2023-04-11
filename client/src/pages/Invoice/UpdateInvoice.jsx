import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UpdateInvoice() {
  const [showCheckInputs, setShowCheckInputs] = useState(false);
  const [showReasonTextarea, setShowReasonTextarea] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'yes') {
      setShowCheckInputs(checked);
    } else if (name === 'right') {
      setShowReasonTextarea(checked);
    }
  };

  return (
    <div>
      <div className="container">
        <div
          className="row mt-5 py-5 justify-content-center rounded rounded-4 "
          style={{ background: '#3658A7' }}
        >
          <h2 className="text-white text-center fw-bold">Update Invoice</h2>
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

            <div className="mt-5 nichoooo">
              <form>
                <h4 className="fw-bold text-white ">Paid</h4>
                <div className="bx_upper d-flex align-items-center gap-4 mt-3">
                  <div className="form-check d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      name="yes"
                      onChange={handleCheckboxChange}
                    />
                    <Form.Label className="fs-5 mb-0 ms-2 text-white">
                      Yes
                    </Form.Label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      name="no"
                      onChange={handleCheckboxChange}
                    />
                    <Form.Label className="fs-5 mb-0 ms-2 text-white">
                      No
                    </Form.Label>
                  </div>
                </div>

                <div className="pop_up_1 d-flex gap-3">
                  {showCheckInputs && (
                    <>
                      <div className="Check Number">
                        <Form.Label className="fs-5 fw-bold text-white">
                          Check Number:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          className="py-1"
                        />
                      </div>
                      <div className="Amount Paid">
                        <Form.Label className="fs-5 fw-bold text-white">
                          Paid Amount:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          className="py-1"
                        />
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
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
            <div className="d-flex gap-3">
              <Form className="w-100 mt-5">
                <Form.Group className="mb-3">
                  <Form.Label className="fs-5 fw-bold text-white">
                    Invoice Date
                  </Form.Label>
                  <Form.Control type="date" className="py-2" />
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
                  <Form.Control type="date" className="py-2" />
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
            <div className="questionn mt-5">
              <form action="">
                <h4 className="fw-bold text-white ">Short Paid</h4>
                <div className="bx_upper d-flex align-items-center gap-4 mt-3">
                  <div className="form-check d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      name="right"
                      onChange={handleCheckboxChange}
                    />
                    <Form.Label className="fs-5 mb-0 ms-2 text-white">
                      Yes
                    </Form.Label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      name="no"
                      onChange={handleCheckboxChange}
                    />
                    <Form.Label className="fs-5 mb-0 ms-2 text-white">
                      No
                    </Form.Label>
                  </div>
                </div>
              </form>
              <div className="pop_up_2 ">
                {showReasonTextarea && (
                  <div className="">
                    <Form.Label className="fs-5 mb-0 fw-bold text-white">
                      Reason:
                    </Form.Label>
                    <div className="mt-3">
                      {' '}
                      <textarea
                        nameName="rounded rounded-3 px-3"
                        placeholder="Write Reason"
                        id=""
                        cols="50"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateInvoice;
