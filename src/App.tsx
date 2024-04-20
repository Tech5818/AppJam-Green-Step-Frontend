import { Route, Routes, useLocation } from "react-router-dom";
import loadable from "@loadable/component";
import { BottomNavigationBar } from "./components/BottomNavigationBar";
import { Header } from "./components/Header/Header";
import styled from "styled-components";
import { useEffect } from "react";
import { useCurrentUrl } from "./store/CurrentUrl";

const HomePage = loadable(() => import("./pages/HomePage"));
const CommunityPage = loadable(() => import("./pages/CommunityPage"));
const MyPage = loadable(() => import("./pages/MyPage"));
const CameraPage = loadable(() => import("./pages/CameraPage"));

function App() {
  const { setCurrentUrl } = useCurrentUrl();
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(location.pathname);
  });

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
            <Route path="/profile" element={<MyPage />} loader={MyPage.load} />
            <Route
              path="/camera"
              element={<CameraPage />}
              loader={CameraPage.load}
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
  overflow-y: scroll;
`;

export default App;
