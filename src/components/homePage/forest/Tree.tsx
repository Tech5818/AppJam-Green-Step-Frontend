import styled from "styled-components";
import src from "../../../assets/forest.png";
import EyeBrow from "../../../assets/EyeBrow.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Tree = () => {
  const [isMovingRight, setIsMovingRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMovingRight((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Container>
        <TreeImg src={src} />
        <TreeBox>
          <TreeFace>
            <EyeBrowFramer
              animate={{ y: isMovingRight ? "0" : "-3px" }}
              transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <EyeBrowImg src={EyeBrow} />
            </EyeBrowFramer>
            <Eyes>
              <Eye>
                <Pupil
                  animate={{ x: isMovingRight ? "0" : "6px" }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
              </Eye>
              <Eye>
                <Pupil
                  animate={{ x: isMovingRight ? "0" : "6px" }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
              </Eye>
            </Eyes>
          </TreeFace>
        </TreeBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
`;
const TreeBox = styled.div`
  width: 108px;
  height: 108px;
  position: absolute;
  border-radius: 50%;
  top: 10%;
  transform-origin: center;
  left: 34%;
  display: flex;
  flex-flow: column;
  gap: 1px;
`;

const TreeFace = styled.div`
  width: 23px;
  height: 40px;
  margin-left: 40px;
  margin-top: 20px;
`;

const TreeImg = styled.img``;

const EyeBrowFramer = styled(motion.div)``;
const EyeBrowImg = styled.img``;

const Eyes = styled.div`
  display: flex;
`;

const Eye = styled.div`
  width: 11px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
`;

const Pupil = styled(motion.div)`
  width: 4px;
  height: 6px;
  border-radius: 50%;
  background: #000;
  left: 100%;
`;
