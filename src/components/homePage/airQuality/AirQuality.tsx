import { Text } from "@chakra-ui/react";
import styled from "styled-components";
import { FineDust } from "./FineDust";
import { UltraFineDust } from "./UltraFineDust";
import { OZone } from "./OZone";

export const AirQuality = () => {
  return (
    <>
      <Container>
        <Content>
          <Text fontFamily={"Pretendard-SemiBold"} fontSize={17}>
            오늘의 대기질 정보
          </Text>
          <QualityBox>
            <Text fontSize={15}>미세먼지 수치</Text>
            <FineDust />
          </QualityBox>
          <QualityBox>
            <Text fontSize={15}>초 미세먼지 수치</Text>
            <UltraFineDust />
          </QualityBox>
          <QualityBox>
            <Text fontSize={15}>오존 수치</Text>
            <OZone />
          </QualityBox>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 42%;
`;

const Content = styled.div`
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

const QualityBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 20px;
`;
