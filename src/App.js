// https://www.figma.com/file/A7eYA9H1eAuinV22P6G8KC/Hosting-Services-Landing-Page-Template-(Community)?node-id=1%3A1060

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";


function App() {
  return (
    <div className="bg-darkBlue">
        <Navbar />       
    </div>
  );
}

export default App;
