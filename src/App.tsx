import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { BottomNavigationBar } from "./components/BottomNavigationBar";
import { Header } from "./components/Header/Header";
import styled from "styled-components";

const HomePage = loadable(() => import("./pages/HomePage"));
const CommunityPage = loadable(() => import("./pages/CommunityPage"));

function App() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} loader={HomePage.load} />
            <Route
              path="/community"
              element={<CommunityPage />}
              loader={HomePage.load}
            />
          </Routes>
        </Content>
        <BottomNavigationBar />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;
const Content = styled.div`
  flex: 1;
`;

export default App;
