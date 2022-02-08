import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
