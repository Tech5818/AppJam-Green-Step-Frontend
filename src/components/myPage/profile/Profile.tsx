import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import UserIcon from "../../../assets/UserIcon.png";

export const Profile = () => {
  return (
    <>
      <Container>
        <Content>
          <ProfileImg src={UserIcon} />
          <Box
            display={"flex"}
            flexFlow={"column"}
            gap={"5px"}
            justifyContent={"center"}
          >
            <Text fontSize={20} fontFamily={"Pretendard-Medium"}>
              loveforest
            </Text>
            <Text
              fontSize={15}
              fontFamily={"Pretendard-Medium"}
              color={"#FFBCC8"}
            >
              내 포인트: 250P
            </Text>
          </Box>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 5px solid #f5f6f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;
