import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import circle from "../../assets/circleTree.png";
import icons from "../../assets/네모.png";
import unknown from "../../assets/unknown.png";

export const MyTree = () => {
  return (
    <>
      <Container>
        <Mys>
          <Text fontFamily={"Pretendard-Medium"} fontSize={20}>
            My Forest
          </Text>
          <Box
            background={"#DFF2F8"}
            borderRadius={10}
            padding={"20px 35px"}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexFlow={"column"} gap={"5px"}>
              <img src={circle} />
              <Text fontFamily={"Pretendard-Medium"} fontSize={15}>
                동그리
              </Text>
            </Box>
            <Box display={"flex"} flexFlow={"column"} gap={"5px"}>
              <img src={icons} />
              <Text fontFamily={"Pretendard-Medium"} fontSize={15}>
                네모나리
              </Text>
            </Box>
            <Box display={"flex"} flexFlow={"column"} gap={"5px"}>
              <img src={unknown} />
            </Box>
          </Box>
        </Mys>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100% - 20%);
  padding: 30px 20px;
`;

const Mys = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 10px;
`;
