import styled from "styled-components";
import { Mobile } from "../Responsive";
import { Share } from "./svg/Share";
import { Home } from "./svg/Home";
import { Profile } from "./svg/Profile";
import { Link } from "react-router-dom";

export const BottomNavigationBar = () => {
  // const;

  return (
    <>
      <Mobile>
        <Container>
          <Share />
          <Home />
          <Profile />
        </Container>
      </Mobile>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.07);
`;
