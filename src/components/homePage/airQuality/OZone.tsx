import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AirQualityStat } from "./AirQualityStat";

export const OZone = () => {
  // const { data } = useQuery<number>({
  //   queryKey: ["fineDust"],
  //   queryFn: async () => {
  //     const response = await axios.get(import.meta.env.VITE_OZONE_URL);

  //     const data = response.data.response.body.items[0].seoul as number;
  //     console.log(data);

  //     if (data >= 0.12) {
  //       return 0;
  //     } else if (data >= 0.3) {
  //       return 1;
  //     } else if (data >= 0.5) {
  //       return 2;
  //     } else {
  //       return 3;
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
