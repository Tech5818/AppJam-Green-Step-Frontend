import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AirQualityStat } from "./AirQualityStat";

export const FineDust = () => {
  // const { data } = useQuery<number>({
  //   queryKey: ["fineDust"],
  //   queryFn: async () => {
  //     const response = await axios.get(import.meta.env.VITE_FINE_DUST_URL);

  //     const data = response.data.response.body.items[0].seoul as number;
  //     console.log(data);

  //     if (data <= 30) {
  //       return 3;
  //     } else if (data <= 80) {
  //       return 2;
  //     } else if (data <= 150) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   },
  //   refetchInterval: false,
  // });
  return (
    <>
      <Container>
        <AirQualityStat grade={3} />
      </Container>
    </>
  );
};

const Container = styled.div``;
