import { GET_ALL_CARRIERS_BROKERS } from './queries';
import { useQuery } from '@apollo/client';

export const getAllCarriesAndBroker = () => {
  const { loading, data } = useQuery(GET_ALL_CARRIERS_BROKERS);
  if (loading) {
    return <div>Loading...</div>;
  }

  const brokers = data?.brokers || [];
  const carriers = data?.carriers || [];

  return { brokers, carriers };
};
