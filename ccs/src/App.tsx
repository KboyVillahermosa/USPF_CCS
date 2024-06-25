import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import {Component as  Navbar} from './components/navbar/Navbar'
import Course from "./components/courses/Course";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<>
          < Header />
          < Course />
         </>} />     
         <Route path='/testimonials' element={ <Testimonials />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
