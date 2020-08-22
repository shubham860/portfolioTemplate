import React from 'react';
import './App.css';
import Home from './components/Home'
import Section1 from "./components/Section1";
import Section2 from "./components/section2";
import Section3 from "./components/Section3";

function App() {
  return (
    <div className="App">
        <Home/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  );
}

export default App;
