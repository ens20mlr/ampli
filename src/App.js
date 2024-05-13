import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React, {} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <HelmetProvider>
        <Helmet>
          <title>Mikael Meander | Portfolio</title>
          <meta charSet="UTF-8" />
          <meta name="author" content="Mikael Meander" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      </HelmetProvider>

      <Router basename='/ens20mlr/Portfolio'>
        <Routes>

          <Route element={<NavBar />} />
          <Route element={<Banner />} />
          <Route  element={<Skills />} />
          <Route  element={<Projects />} />
          <Route element={<Contact />} />
          <Route element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
