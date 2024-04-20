import styled from "styled-components";
import { Mobile } from "../Responsive";
import { useResult } from "../store/Result";

export default function ResultPage() {
  const { data } = useResult();
  return (
    <>
      <Mobile>
        <Container>
          <img src={`data:image/jpeg;base64,${data}`} />
        </Container>
      </Mobile>
    </>
  );
}

const Container = styled.div``;
