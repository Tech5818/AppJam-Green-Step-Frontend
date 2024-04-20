import styled from "styled-components";
import { Tree } from "./Tree";
import { Header } from "./Header";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Forest = () => {
  const variant = {
    open: {
      y: "0",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1,
      },
    },
    closed: {
      y: "-50%",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <Container variants={variant} initial="closed" animate="open">
        <Header />
        <Box flex={1} />
        <Tree />
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: 50%;
  background: #dff2f8;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
`;
