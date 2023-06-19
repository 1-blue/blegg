import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 4, // 4분
      cacheTime: 1000 * 60 * 5, // 5분
    },
  },
});

/** 2023/06/19 - react-query provider - by 1-blue */
const MyReactQueryProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      {children}
    </QueryClientProvider>
  );
};

export default MyReactQueryProvider;
