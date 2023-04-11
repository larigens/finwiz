<<<<<<< HEAD
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EmployeeDashboard() {
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
                <div className="w-75">
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
=======
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

function EmployeeDashboard() {
  return (
    <Stack
      bg="brand.800"
      p={10}
      spacing={6}
      borderRadius="lg"
      boxShadow="lg"
      mt={5}
      mx={4}
    >
      <Stack spacing={4}>
        <FormControl>
          <FormLabel color="brand.500" fontSize="xl">
            Search Invoices, Brokers and Carriers
          </FormLabel>
          <Input
            type="search"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            color="brand.500"
          />
        </FormControl>
        <Button
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          borderRadius="full"
        >
          Search
        </Button>
      </Stack>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel color="white" fontSize="xl">
            Add new Invoice
          </FormLabel>
          <Input
            type="text"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            borderWidth="1px"
            borderColor="brand.700"
            color="brand.500"
          />
        </FormControl>
        <Button
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          borderRadius="full"
        >
          {' '}
          Add
        </Button>
      </Stack>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel color="white" fontSize="xl">
            Update/Delete Invoice
          </FormLabel>
          <Input
            type="text"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            borderWidth="1px"
            borderColor="brand.700"
            color="brand.500"
          />
        </FormControl>
        <Stack direction={['column', 'row']} spacing={4}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            borderRadius="full"
          >
            Update
          </Button>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            borderRadius="full"
          >
            Delete
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel color="white" fontSize="xl">
            Add new Broker
          </FormLabel>
          <Input
            type="text"
            size="lg"
            borderRadius="full"
            bg="brand.800"
            borderWidth="1px"
            borderColor="brand.700"
            color="brand.500"
          />
        </FormControl>
        <Button
          bg="brand.600"
          color="brand.500"
          _hover={{ bg: 'brand.700', color: 'brand.500' }}
          borderRadius="full"
        >
          {' '}
          Add
        </Button>
      </Stack>
    </Stack>
>>>>>>> cc8efac4f71dca62ab4b7b2018b0a598084484b4
  );
}

export default EmployeeDashboard;
