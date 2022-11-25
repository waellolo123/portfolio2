import './App.css';
import Navbar from './components/navbar/Navbar';
import About from "./pages/about me/About";
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import Gifts from "./pages/gifts/Gifts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
           <Route path="/" element={<About />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/services" element={<Services />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/gifts" element={<Gifts />} />
              
        </Routes>
    </div>
  );
}

export default App;
