import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" category="general" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    );
  }
}
