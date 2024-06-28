import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import {Component as  Navbar} from './components/navbar/Navbar'
import Course from "./components/courses/Course";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<>
          < Header />
          <About />
          <Course />
          <Footer />
         </>} />     
         <Route path='/about' element={ <About />} />
         <Route path='/testimonials' element={ <Testimonials />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
