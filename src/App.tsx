import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { BottomNavigationBar } from "./components/BottomNavigationBar";

const HomePage = loadable(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} loader={HomePage.load} />
        <BottomNavigationBar />
      </Routes>
    </>
  );
}

export default App;
