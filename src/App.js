import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    {/* // <div className="App">
    //    <Header />
    //   <Body /> 
      
    // </div> */}
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Header" element={<Header/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contactus" element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;