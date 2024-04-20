import { Text } from "@chakra-ui/react";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>
        <Content>
          <Text fontFamily={"Pretendard-SemiBold"} fontSize={16}>
            동그리
          </Text>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 200;
`;
