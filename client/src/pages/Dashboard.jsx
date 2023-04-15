import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardHeader, Heading, Stack } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import EmployeeDashboard from './Employee/EmployeeDashboard';
import CarrierDashboard from './Carrier/CarrierDashboard';

export const Dashboard = () => {
  const { loading, data } = useQuery(GET_ME);
  const [showInvoiceEntry, setShowInvoiceEntry] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isAuth = data.me.role === 'Admin' || data.me.role === 'Employee';

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Stack spacing="6" bg="brand.600" mt={8}>
        <Card bg="brand.800" color="brand.500" p={1} m={3} borderRadius="2xl">
          <CardHeader>
            <Heading size="md">
              {data ? `${data.me.fullName}'s Report` : 'Reports'}
            </Heading>
          </CardHeader>
          {isAuth ? (
            <EmployeeDashboard
              showInvoiceEntry={showInvoiceEntry}
              setShowInvoiceEntry={setShowInvoiceEntry}
            />
          ) : (
            <CarrierDashboard
              showInvoiceEntry={showInvoiceEntry}
              setShowInvoiceEntry={setShowInvoiceEntry}
            />
          )}
        </Card>
      </Stack>
    </>
  );
};