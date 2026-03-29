import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* Use a container or div here if you want to add top padding for the fixed navbar */}
        <div className="container"> 
          <Routes>
            {/* General / Home */}
            <Route exact path="/" element={<News key="general" category="general" />} />
            
            {/* About Page */}
            <Route exact path="/about" element={<About />} />
            
            {/* News Categories */}
            <Route exact path="/business" element={<News key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" category="health" />} />
            <Route exact path="/science" element={<News key="science" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
        </div>
      </>
    );
  }
}