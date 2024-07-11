import React from "react";
import Main from "./pages/Main";
import Map from "./pages/Map";
import PreSchool from "./pages/PreSchool";
import School from "./pages/School";
import Ticket from "./pages/Ticket";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App regular-font bg-white">
      <Header />
      <div className="middle-page">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/preSchool" element={<PreSchool />}></Route>
          <Route path="/school" element={<School />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
