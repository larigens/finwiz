import React, { useState } from 'react';
import {
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { EmployeeSideBar } from './EmployeeSideBar';
import { CarrierMenu } from '../Carrier/CarrierMenu';
import { BrokerMenu } from '../Broker/BrokerMenu';
import { InvoiceMenu } from '../Invoice/InvoiceMenu';

function Employee() {
  const [showCarrierSummary, setShowCarrierSummary] = useState(false);
  const [showInvoiceSummary, setShowInvoiceSummary] = useState(false);
  const [showInvoiceEntry, setShowInvoiceEntry] = useState(false);

  const handleShowClick = (event, id) => {
    event.preventDefault();
    if (id === 'carrierSummary') {
      setShowCarrierSummary(!showCarrierSummary);
    } else if (id === 'invoiceSummary') {
      setShowInvoiceSummary(!showInvoiceSummary);
    } else if (id === 'invoiceEntry') {
      setShowInvoiceEntry(!showInvoiceEntry);
    }
  };

  return (
    <>
      {/* <EmployeeSideBar /> */}
      <Stack divider={<StackDivider />} spacing="4" p="4">
        <CarrierMenu
          handleShowClick={handleShowClick}
          showCarrierSummary={showCarrierSummary}
        />
        <BrokerMenu />
        <InvoiceMenu
          handleShowClick={handleShowClick}
          showInvoiceSummary={showInvoiceSummary}
          showInvoiceEntry={showInvoiceEntry}
        />
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Others
          </Heading>
          <Box>
            <Link
              as={RouterLink}
              to="/employeeDashboard"
              color="brand.500"
              _hover={{
                color: 'brand.600',
              }}
              size="xs"
            >
              <Text size="xs"> More Options... </Text>
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default Employee;
