import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import UserIcon from "../../assets/UserIcon.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variant = {
  open: {},
  closed: {},
};
const itemVariants = {
  closed: {
    opacity: 0,
    x: "-20%",
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const FriendList = () => {
  const [isName, setIsName] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsName(searchParams.get("name")!);
    console.log(isName);
  });

  return (
    <>
      <Container variants={variant} initial={"closed"} animate={"open"}>
        <Text fontSize={17} fontFamily={"Pretendard-SemiBold"}>
          소통창
        </Text>
        <List
          variants={{
            open: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            closed: {},
          }}
        >
          {isName != null ? (
            <>
              <Item variants={itemVariants}>
                <Icon src={UserIcon} />
                <Box>
                  <Text fontSize={15} color={"#AEAEAE"}>
                    App Jam 화이팅!
                  </Text>
                  <Text fontSize={15} color={"#5EC570"}>
                    300 그루
                  </Text>
                </Box>
              </Item>
            </>
          ) : (
            <>
              <Item variants={itemVariants}>
                <Icon src={UserIcon} />
                <Box>
                  <Text fontSize={15} color={"#AEAEAE"}>
                    App Jam 화이팅!
                  </Text>
                  <Text fontSize={15} color={"#5EC570"}>
                    300 그루
                  </Text>
                </Box>
              </Item>
              <Item variants={itemVariants}>
                <Icon src={UserIcon} />
                <Box>
                  <Text fontSize={15} color={"#AEAEAE"}>
                    test1
                  </Text>
                  <Text fontSize={15} color={"#5EC570"}>
                    300 그루
                  </Text>
                </Box>
              </Item>
              <Item variants={itemVariants}>
                <Icon src={UserIcon} />
                <Box>
                  <Text fontSize={15} color={"#AEAEAE"}>
                    test2
                  </Text>
                  <Text fontSize={15} color={"#5EC570"}>
                    300 그루
                  </Text>
                </Box>
              </Item>
              <Item variants={itemVariants}>
                <Icon src={UserIcon} />
                <Box>
                  <Text fontSize={15} color={"#AEAEAE"}>
                    test3
                  </Text>
                  <Text fontSize={15} color={"#5EC570"}>
                    300 그루
                  </Text>
                </Box>
              </Item>
              <Item variants={itemVariants}>
                <Icon src={UserIcon} />
                <Box>
                  <Text fontSize={15} color={"#AEAEAE"}>
                    test4
                  </Text>
                  <Text fontSize={15} color={"#5EC570"}>
                    300 그루
                  </Text>
                </Box>
              </Item>
            </>
          )}
        </List>
        {isName != null ? (
          <>
            <Box display={"flex"}>
              <Box flex={1} />
              <Text
                cursor={"pointer"}
                onClick={() => {
                  navigation("/community");
                }}
              >
                뒤로
              </Text>
            </Box>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: calc(100% - 20%);
  display: flex;
  flex-flow: column;
  padding: 0 40px;
  gap: 10px;
`;
const List = styled(motion.div)`
  display: flex;
  flex-flow: column;
`;

const Item = styled(motion.div)`
  width: 100%;
  padding: 18px 12px;
  display: flex;
  align-items: center;
  border-top: 0.8px solid #c6c6c6;
  gap: 20px;
  cursor: pointer;

  &:nth-last-child(1) {
    border-bottom: 0.8px solid #c6c6c6;
  }
`;

const Icon = styled.img``;
