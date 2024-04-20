import styled from "styled-components";
import { Mobile } from "../Responsive";
import { AirQuality } from "../components/homePage/airQuality/AirQuality";
import { Forest } from "../components/homePage/Forest";

export default function HomePage() {
  return (
    <>
      <Mobile>
        <Container>
          <Forest />
          <AirQuality />
        </Container>
      </Mobile>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 30px;
`;
