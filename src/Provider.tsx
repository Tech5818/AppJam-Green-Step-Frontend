import { ChakraBaseProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ChakraBaseProvider>{children}</ChakraBaseProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};
