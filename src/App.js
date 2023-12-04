import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Smart from "./Pages/Smart";
import About from "./Pages/About";
import Properties from "./Pages/Properties";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Smart_Property_Finder" element={<Smart/>} />
          <Route path="/About-Us" element={<About/>} />
          <Route path="/Property-Listing" element={<Properties/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
