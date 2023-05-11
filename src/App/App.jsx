import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Search from "../Search/Search";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
