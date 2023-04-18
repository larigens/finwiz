import { useQuery } from '@apollo/client';
import { GET_ALL_CARRIERS_BROKERS, GET_ALL_INVOICES } from './queries';

export const getAllCarriesAndBroker = () => {
  const { loading, data } = useQuery(GET_ALL_CARRIERS_BROKERS);
  if (loading) {
    return <div>Loading...</div>;
  }

  const brokers = data?.brokers || [];
  const carriers = data?.carriers || [];

  return { brokers, carriers };
};

export const getAllInvoices = () => {
  const { loading, data } = useQuery(GET_ALL_INVOICES);
  if (loading) {
    return <div>Loading...</div>;
  }
  const invoices = data?.invoices || [];
  return invoices;
};

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;