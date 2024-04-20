import styled from "styled-components";
import { Heart } from "../../svg/Heart";

interface IAirQualityStat {
  grade: number;
}

export const AirQualityStat = ({ grade }: IAirQualityStat) => {
  const importStats = () => {
    if (grade === 0) {
      return (
        <>
          <Heart />
          <Heart />
          <Heart />
        </>
      );
    } else if (grade === 1) {
      return (
        <>
          <Heart color="#5EC570" />
          <Heart />
          <Heart />
        </>
      );
    } else if (grade === 2) {
      return (
        <>
          <Heart color="#5EC570" />
          <Heart color="#5EC570" />
          <Heart />
        </>
      );
    } else {
      return (
        <>
          <Heart color="#5EC570" />
          <Heart color="#5EC570" />
          <Heart color="#5EC570" />
        </>
      );
    }
  };

  return (
    <>
      <Container>{importStats()}</Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5px;
`;
