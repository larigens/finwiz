import React, { useState } from 'react';
import { Heading, Stack, StackDivider, Box } from '@chakra-ui/react';
import { CarrierMenu } from '../Carrier/CarrierMenu';
import { BrokerMenu } from '../Broker/BrokerMenu';
import { InvoiceMenu } from '../Invoice/InvoiceMenu';

function EmployeeDashboard({ showInvoiceEntry, setShowInvoiceEntry }) {
  const [showCarrierSummary, setShowCarrierSummary] = useState(false);
  const [showInvoiceSummary, setShowInvoiceSummary] = useState(false);
  const [showBrokerSummary, setShowBrokerSummary] = useState(false);

  const handleShowClick = (event, id) => {
    event.preventDefault();
    if (id === 'carrierSummary') {
      setShowCarrierSummary(!showCarrierSummary);
    } else if (id === 'invoiceSummary') {
      setShowInvoiceSummary(!showInvoiceSummary);
    } else if (id === 'invoiceEntry') {
      setShowInvoiceEntry(!showInvoiceEntry);
    } else if (id === 'brokerSummary') {
      setShowBrokerSummary(!showBrokerSummary);
    }
  };

  return (
    <>
      <Stack divider={<StackDivider />} spacing="4" p="4">
        <CarrierMenu
          handleShowClick={handleShowClick}
          showCarrierSummary={showCarrierSummary}
        />
        <BrokerMenu
          handleShowClick={handleShowClick}
          showBrokerSummary={showBrokerSummary}
        />
        <InvoiceMenu
          handleShowClick={handleShowClick}
          showInvoiceSummary={showInvoiceSummary}
          showInvoiceEntry={showInvoiceEntry}
        />
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Others
          </Heading>
        </Box>
      </Stack>
    </>
  );
}

export default EmployeeDashboard;
