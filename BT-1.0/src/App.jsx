import React from "react";
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {Routes,Route} from 'react-router-dom'
import About from "./components/About/About";
import Home from './components/Home/Home'
import Instructions from "./components/Instructions/Instructions";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";



export default function App() {

  return (
    <>
    <NavigationBar></NavigationBar>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/play" element={<Body/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/docs" element={<Instructions/>} />
    </Routes>
    <Footer/>
    </>
  );
}
