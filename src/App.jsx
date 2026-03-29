import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newscomponent from "./components/News";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Newscomponent key="general" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<Newscomponent key="business" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <Newscomponent key="entertainment" category="entertainment" />
            }
          />
          <Route
            exact
            path="/health"
            element={<Newscomponent key="health" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<Newscomponent key="science" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<Newscomponent key="sports" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<Newscomponent key="technology" category="technology" />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </>
    );
  }
}
