import { ChakraBaseProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BrowserRouter>
        <ChakraBaseProvider>{children}</ChakraBaseProvider>
      </BrowserRouter>
    </>
  );
};
