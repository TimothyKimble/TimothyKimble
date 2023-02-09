import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Experience from "./routes/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <body className="debug">


    <main className="container-fluid p-0">
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/TimothyKimble/" element={<Home />} />
      <Route path="/TimothyKimble/about" element={<About />} />
      <Route path="/TimothyKimble/experience" element={<Experience />} />
    </Routes>
  </Router>
  </main>
  </body>
  );
}

export default App;
