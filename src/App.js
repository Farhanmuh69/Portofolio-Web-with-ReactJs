import './App.css';
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Awards from './Pages/Awards';
import SkillsPage from './Pages/Skills';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/awards" element={<Awards/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;