import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { getAllCarriesAndBroker } from '../../../utils/helper';

export const FormControlCarriers = ({
  carrierName,
  invoice,
  formData,
  handleInputChange,
}) => {
  const carriersAndBrokers = getAllCarriesAndBroker();
  const carriers = carriersAndBrokers.carriers;

  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="carrier">Carrier</FormLabel>
      <Select
        id="carrier"
        onChange={handleInputChange}
        name="carrier"
        value={formData.carrier}
        isRequired
        cursor="pointer"
        color="brand.800"
        fontWeight="semibold"
        bg="brand.600"
        className="no-border"
      >
        {carrierName ? (
          <>
            <option value={invoice.carrier}>{carrierName}</option>
            {carriers &&
              carriers.map((singleCarrier) => (
                <option key={singleCarrier._id} value={singleCarrier._id}>
                  {singleCarrier.company}
                </option>
              ))}
          </>
        ) : (
          <>
            <option></option>
            {carriers &&
              carriers.map((singleCarrier) => (
                <option key={singleCarrier._id} value={singleCarrier._id}>
                  {singleCarrier.company}
                </option>
              ))}
          </>
        )}
      </Select>
    </FormControl>
  );
};

export const FormControlBrokers = ({
  brokerName,
  invoice,
  formData,
  handleInputChange,
}) => {
  const carriersAndBrokers = getAllCarriesAndBroker();
  const brokers = carriersAndBrokers?.brokers;

  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="broker">Broker</FormLabel>
      <Select
        id="broker"
        onChange={handleInputChange}
        name="broker"
        value={formData.broker}
        isRequired
        cursor="pointer"
        color="brand.800"
        fontWeight="semibold"
        bg="brand.600"
        className="no-border"
      >
        {brokerName ? (
          <>
            <option value={invoice.broker}>{brokerName}</option>
            {brokers &&
              brokers.map((singleBroker) => (
                <option key={singleBroker._id} value={singleBroker._id}>
                  {singleBroker.name}
                </option>
              ))}
          </>
        ) : (
          <>
            <option></option>
            {brokers &&
              brokers.map((singleBroker) => (
                <option key={singleBroker._id} value={singleBroker._id}>
                  {singleBroker.name}
                </option>
              ))}
          </>
        )}
      </Select>
    </FormControl>
  );
};

export const FormControlPaid = ({ formData, handleInputChange }) => {
  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="paid">Paid</FormLabel>
      <Select
        id="paid"
        onChange={handleInputChange}
        name="paid"
        value={formData.paid}
        isRequired
        cursor="pointer"
        color="brand.800"
        fontWeight="semibold"
        bg="brand.600"
        className="no-border"
      >
        <option value="false"> No </option>
        <option value="true"> Yes </option>
      </Select>
    </FormControl>
  );
};

export const FormControlShortPaid = ({ formData, handleInputChange }) => {
  return (
    <FormControl mb={2}>
      <FormLabel htmlFor="shortPaid">Short-Paid</FormLabel>
      <Select
        id="shortPaid"
        onChange={handleInputChange}
        name="shortPaid"
        value={formData.shortPaid}
        isRequired
        cursor="pointer"
        color="brand.800"
        fontWeight="semibold"
        bg="brand.600"
        className="no-border"
      >
        <option value="false"> No </option>
        <option value="true"> Yes </option>{' '}
      </Select>
    </FormControl>
  );
};
