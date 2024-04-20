import styled from "styled-components";
import { Mobile } from "../../Responsive";
import { useCurrentUrl } from "../../store/CurrentUrl";
import { Home } from "../svg/Home";
import { Share } from "../svg/Share";
import { Profile } from "../svg/Profile";
import { Camera } from "../svg/Camera";

export const Header = () => {
  const { currentUrl } = useCurrentUrl();

  const importIcon = () => {
    if (currentUrl === "/") {
      return <Home color="#5EC570" />;
    } else if (currentUrl.includes("/community")) {
      return <Share color="#5EC570" />;
    } else if (currentUrl.includes("/profile")) {
      return <Profile color="#5EC570" />;
    } else if (currentUrl.includes("/camera")) {
      return <Camera color="#5EC570" />;
    } else {
      return null;
    }
  };

  return (
    <>
      <Mobile>
        <Container>
          <Logo src="./img/header_logo.png" />
          {importIcon()}
        </Container>
      </Mobile>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 10px 20px;
  align-items: flex-end;
  gap: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  z-index: 100;
`;

const Logo = styled.img``;
