import { useState, useEffect } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Container,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_PAYMENT, UPDATE_INVOICE } from '../../utils/mutations';

function SettleInvoice({ invoice }) {
  const [showCheckInputs, setShowCheckInputs] = useState(false);
  const [showRebateReasonTextarea, setShowRebateReasonTextarea] =
    useState(false);
  const [showShortPaidReasonTextarea, setShowShortPaidReasonTextarea] =
    useState(false);
  const [paidChecked, setPaidChecked] = useState(false);
  const [rebateChecked, setRebateChecked] = useState(false);
  const [settlementFormData, setSettlementFormData] = useState({
    paid: '',
    shortPaid: '',
    rebate: '',
    checkNumber: '',
    paidAmount: '',
    payDate: '',
    rebateReason: '',
    shortPaidReason: '',
  });

  useEffect(() => {
    if (invoice) {
      setSettlementFormData({ ...invoice, invoice: invoice._id });
    }
  }, [invoice]);

  const [addPayment, { error }] = useMutation(ADD_PAYMENT);
  const [updateInvoice, { error: ErrorInvoice }] = useMutation(UPDATE_INVOICE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSettlementFormData({ ...settlementFormData, [name]: value });
  };

  const handleBlur = () => {
    if (parseInt(settlementFormData.paidAmount, 10) < invoice.amount) {
      setShowShortPaidReasonTextarea(true);
      setSettlementFormData({
        ...settlementFormData,
        paid: true,
        shortPaid: true,
        rebate: false,
      });
    } else if (parseInt(settlementFormData.paidAmount, 10) >= invoice.amount) {
      setShowShortPaidReasonTextarea(false);
      setSettlementFormData({
        ...settlementFormData,
        paid: true,
        shortPaid: false,
        rebate: false,
      });
    } else if (!settlementFormData.paidAmount) {
      setShowShortPaidReasonTextarea(false);
      setSettlementFormData({
        ...settlementFormData,
        paid: false,
        shortPaid: false,
        rebate: true,
      });
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // TODO: check if amount paid is less than invoice amount and automatically check shortpaid and display reason txtarea.
    if (name === 'paid') {
      setPaidChecked(checked);
      setShowCheckInputs(true);
      setRebateChecked(!checked);
      setShowRebateReasonTextarea(false);
    } else if (name === 'rebate') {
      setShowRebateReasonTextarea(true);
      setRebateChecked(checked);
      setPaidChecked(!checked);
      setShowCheckInputs(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const parsedFormData = {
        ...settlementFormData,
        paidAmount: parseInt(settlementFormData.paidAmount, 10),
      };
      const { data } = await addPayment({
        variables: parsedFormData,
      });
      await updateInvoice({
        variables: {
          invoiceId: invoice._id,
          paid: parsedFormData.paid,
          shortPaid: parsedFormData.shortPaid,
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setSettlementFormData({
      paid: '',
      payDate: '',
      shortPaid: '',
      rebate: '',
      checkNumber: '',
      paidAmount: '',
      rebateReason: '',
      shortPaidReason: '',
    });
  };

  return (
    <Box py={5} bg="brand.800" textAlign="center">
      <Box
        p={{ base: 3, md: 8 }}
        rounded="2xl"
        boxShadow="lg"
        bg="brand.800"
        border="0.5px solid #98B5FF"
      >
        <Heading as="h1" size="xl" color="brand.500" my={8}>
          Settle Invoice
        </Heading>{' '}
        <Stack spacing={4} direction={['column', 'row']}>
          <FormControl mb={{ base: 2, md: 4 }} mx={{ base: 0, md: 3 }}>
            <FormLabel htmlFor="invoiceNumber" color="brand.500">
              Invoice Number
            </FormLabel>
            <Input
              type="number"
              name="invoiceNumber"
              placeholder={invoice.invoiceNumber}
              bg="brand.600"
              className="no-border"
              readOnly
            />
          </FormControl>
          <FormControl mb={{ base: 2, md: 4 }} mx={{ base: 0, md: 3 }}>
            <FormLabel htmlFor="loadNumber" color="brand.500">
              Load Number
            </FormLabel>
            <Input
              type="text"
              name="loadNumber"
              placeholder={invoice.loadNumber}
              bg="brand.600"
              className="no-border"
              readOnly
            />
          </FormControl>
        </Stack>
        <Stack
          spacing={{ base: 4, md: 6 }}
          direction={['column', 'row']}
          my={7}
          justifyContent="center"
        >
          <Checkbox
            name="paid"
            onChange={handleCheckboxChange}
            size={{ base: 'md', md: 'lg' }}
            mx={{ base: 0, md: 2 }}
            px={{ base: 2, md: 4 }}
            isChecked={paidChecked}
          >
            Paid
          </Checkbox>
          <Checkbox
            name="rebate"
            onChange={handleCheckboxChange}
            size={{ base: 'md', md: 'lg' }}
            mx={{ base: 0, md: 2 }}
            px={{ base: 2, md: 4 }}
            isChecked={rebateChecked}
          >
            Add to Rebate
          </Checkbox>
        </Stack>
        {showCheckInputs && (
          <Stack
            direction={['column', 'row']}
            spacing={4}
            m={{ base: 1, md: 3 }}
          >
            <FormControl isRequired mb={2}>
              <FormLabel htmlFor="checkNumber" color="brand.500">
                Check Number:
              </FormLabel>
              <Input
                type="text"
                name="checkNumber"
                onChange={handleInputChange}
                value={settlementFormData.checkNumber || ''}
              />
            </FormControl>
            <FormControl isRequired mb={4}>
              <FormLabel htmlFor="paidAmount" color="brand.500">
                Amount Paid
              </FormLabel>
              <InputGroup>
                <InputLeftAddon
                  children="$"
                  color="brand.500"
                  bg="transparent"
                  border="none"
                  size="lg"
                />
                <Input
                  type="number"
                  name="paidAmount"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={settlementFormData.paidAmount || ''}
                  placeholder={invoice.amount}
                />
              </InputGroup>
            </FormControl>
            <FormControl mb={2}>
              <FormLabel>Pay date</FormLabel>
              <Input
                type="date"
                name="payDate"
                colorScheme="brand"
                value={settlementFormData.payDate || ''}
                onChange={handleInputChange}
              />
            </FormControl>
          </Stack>
        )}
        {showRebateReasonTextarea && (
          <FormControl isRequired mb={2}>
            <FormLabel fontSize="lg">Reason:</FormLabel>
            <Textarea
              placeholder="Write Reason"
              name="rebateReason"
              size="lg"
              borderRadius="md"
            />
          </FormControl>
        )}
        {showShortPaidReasonTextarea && (
          <FormControl isRequired mb={2} px={3}>
            <FormLabel fontSize="lg">Reason:</FormLabel>
            <Textarea
              placeholder="Write Reason"
              name="shortPaidReason"
              size="lg"
              borderRadius="md"
            />
          </FormControl>
        )}
        <Container className="text-center" mt={10} mb={3}>
          <Button
            bg="brand.600"
            color="brand.500"
            _hover={{ bg: 'brand.700', color: 'brand.500' }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Container>
      </Box>
      {error && (
        <Alert status="error" mt={5}>
          <AlertIcon />
          {error.message || 'An error occurred.'}
        </Alert>
      )}
      {ErrorInvoice && (
        <Alert status="error" mt={5}>
          <AlertIcon />
          {ErrorInvoice.message || 'An error occurred.'}
        </Alert>
      )}
    </Box>
  );
}

export default SettleInvoice;
