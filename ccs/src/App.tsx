import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import {Component as  Navbar} from './components/navbar/Navbar'
import Course from "./components/courses/Course";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";
import Footer from "./components/footer/Footer"
import Prospectus from "./components/prospectus/Prospectus";
import AboutCcs from "./components/about-ccs/AboutCcs";
import Officers from "./components/officers/Officers";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<>
          <Header />
          <About />
          <Course />
          <Footer />
         </>} />     
         <Route path='/about' element={<>
         < AboutCcs />
         <Officers/>
          </>} />
         <Route path='/testimonials' element={ <Testimonials />} />
         <Route path='/prospectus' element={<Prospectus />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
