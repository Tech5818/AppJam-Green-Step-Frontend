import { Text } from "@chakra-ui/react";
import styled from "styled-components";
import { FineDust } from "./FineDust";
import { UltraFineDust } from "./UltraFineDust";
import { OZone } from "./OZone";
import { motion } from "framer-motion";

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
    y: "30%",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
    },
  },
};
const itemVariants = {
  closed: {
    opacity: 0,
    y: "50%",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AirQuality = () => {
  return (
    <>
      <Container variants={variant} initial={"closed"} animate={"open"}>
        <Content
          variants={{
            open: {
              transition: {
                staggerChildren: 0.3,
              },
            },
            closed: {},
          }}
        >
          <Text fontFamily={"Pretendard-SemiBold"} fontSize={20}>
            오늘의 대기질 정보
          </Text>
          <QualityBox variants={itemVariants}>
            <Text fontSize={15}>미세먼지 수치</Text>
            <FineDust />
          </QualityBox>
          <QualityBox variants={itemVariants}>
            <Text fontSize={15}>초 미세먼지 수치</Text>
            <UltraFineDust />
          </QualityBox>
          <QualityBox variants={itemVariants}>
            <Text fontSize={15}>오존 수치</Text>
            <OZone />
          </QualityBox>
        </Content>
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  padding: 0 20px;
  height: 42%;
`;

const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fffce4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  gap: 15px;
`;

const QualityBox = styled(motion.div)`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 20px;
`;
