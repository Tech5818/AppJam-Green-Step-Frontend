import styled from "styled-components";
import { Mobile } from "../../Responsive";

export const Header = () => {
  return (
    <>
      <Mobile>
        <Container>
          <Logo src="./img/header_logo.png" />
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
`;

const Logo = styled.img``;
