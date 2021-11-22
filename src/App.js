import { Routes, Route } from "react-router";
import { MainAppBar } from "./component";
import Home from "./pages/Home";
import Swatches from "./pages/Swatches";

function App() {
  return (
    <>
      <MainAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swatches" element={<Swatches />} />
      </Routes>
    </>
  );
}

export default App;
