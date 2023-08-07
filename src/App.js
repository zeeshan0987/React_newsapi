
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<News key="a" category="general" />}/>
        <Route path="business" element={<News key="b" category="business" />}/>
        <Route path="entertainment" element={<News key="c" category="entertainment" />}/>
        <Route path="general" element={<News key="e" category="general" />}/>
        <Route path="health" element={<News key="f" category="health" />}/>
        <Route path="science" element={<News key="g" category="science" />}/>
        <Route path="sports" element={<News key='h' category="sports" />}/>
        <Route path="technology" element={<News key='i' category="technology" />}/>
        
        </Routes>
          
        </BrowserRouter>
      </div>
    
      
    )
  }
}

