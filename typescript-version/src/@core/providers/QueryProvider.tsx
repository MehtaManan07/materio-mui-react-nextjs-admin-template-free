import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const useQueryClient = () => queryClient;

export default QueryProvider;
export { queryClient, useQueryClient };
