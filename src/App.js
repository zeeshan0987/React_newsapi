
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
        <NavBar/>
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} key="a" category="general" />}/>
        <Route path="business" element={<News setProgress={this.setProgress} key="b" category="business" />}/>
        <Route path="entertainment" element={<News setProgress={this.setProgress} key="c" category="entertainment" />}/>
        <Route path="general" element={<News setProgress={this.setProgress} key="e" category="general" />}/>
        <Route path="health" element={<News setProgress={this.setProgress} key="f" category="health" />}/>
        <Route path="science" element={<News setProgress={this.setProgress} key="g" category="science" />}/>
        <Route path="sports" element={<News setProgress={this.setProgress} key='h' category="sports" />}/>
        <Route path="technology" element={<News setProgress={this.setProgress} key='i' category="technology" />}/>
        
        </Routes>
          
        </BrowserRouter>
      </div>
    
      
    )
  }
}

