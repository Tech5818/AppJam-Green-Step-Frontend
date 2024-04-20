import { Text } from "@chakra-ui/react";
import styled from "styled-components";

export const AirQuality = () => {
  return (
    <>
      <Container>
        <Content>
          <Text>오늘의 대기질 정보</Text>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  padding: 0 20px;
  height: 50%;
`;

const Content = styled.div`
  width: 100%;
  height: 50%;
  background: #fffce4;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
