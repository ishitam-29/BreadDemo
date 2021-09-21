//import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BreadApi from './BreadApi';
function App() {
  
  

  
  return (
    <>
     <Header/>
     <Main/>
     <Footer
     url={BreadApi[0].url}
     />

    </>
  );
  }

export default App;
