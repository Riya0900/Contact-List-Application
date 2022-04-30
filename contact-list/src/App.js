import React from "react";
import useStyle from './App.style';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import ContactPage from "./Pages/ContactPage";

function App() {

  const classes = useStyle();

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcontacts" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;