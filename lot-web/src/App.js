import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar/Navbar";
import Socials from "./Socials/Socials";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
