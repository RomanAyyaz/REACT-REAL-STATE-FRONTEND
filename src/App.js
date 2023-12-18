import './App.css';
import React,{useState} from 'react';
import Slides from './components/Slides';
import Navbar from './components/Navbar';
import Sales from './components/Sales';
import Footer from './components/Footer';
function App() {
  const[mode,setmode]=useState('light')
  const toggle=()=>{
    if(mode==="light"){
      setmode('dark')
      document.body.style.backgroundColor="hsl(0, 43%, 3%)"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Navbar mode={mode} toggle={toggle}/>
    <Slides/>
    <Sales mode={mode}/>
    <Footer/>
    </>
  );
}
export default App;
