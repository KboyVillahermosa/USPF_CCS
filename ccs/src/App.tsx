import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import {Component as  Navbar} from './components/navbar/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={< Header /> } />

      </Routes>
    </Router>
    </>
  );
}

export default App;
