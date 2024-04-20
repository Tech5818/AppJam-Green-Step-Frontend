import styled from "styled-components";
import { Mobile } from "../Responsive";
import { Share } from "./svg/Share";
import { Home } from "./svg/Home";
import { Profile } from "./svg/Profile";
import { useEffect } from "react";
import { useCurrentUrl } from "../store/CurrentUrl";
import { Link } from "react-router-dom";

export const BottomNavigationBar = () => {
  const { currentUrl } = useCurrentUrl();

  useEffect(() => {
    console.log(currentUrl);
  });

  return (
    <>
      <Mobile>
        <Container>
          <Link to={"community"}>
            <Share
              color={currentUrl.includes("/community") ? "#5EC570" : "#C6C6C6"}
            />
          </Link>
          <Link to={"/"}>
            <Home color={currentUrl === "/" ? "#5EC570" : "#C6C6C6"} />
          </Link>
          <Link to={"/profile"}>
            <Profile
              color={currentUrl.includes("/profile") ? "#5EC570" : "#C6C6C6"}
            />
          </Link>
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
