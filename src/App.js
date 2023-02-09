import logo from './logo.svg';
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  </>
  );
}

export default App;
