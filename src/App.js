import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "./component/GalleryPage/GalleryPage";
import Details from "./component/Details/Details";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GalleryPage />}></Route>
          <Route path="/:uuid" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
