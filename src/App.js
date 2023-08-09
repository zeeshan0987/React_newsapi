
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // apikey=process.env.REACT_APP_NEWS_API
  apikey="c37873bb96bf47fba7e806d996b70418"
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
        <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="a" category="general" />}/>
        <Route path="business" element={<News setProgress={this.setProgress}  apikey={this.apikey}key="b" category="business" />}/>
        <Route path="entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="c" category="entertainment" />}/>
        <Route path="general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="e" category="general" />}/>
        <Route path="health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="f" category="health" />}/>
        <Route path="science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="g" category="science" />}/>
        <Route path="sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key='h' category="sports" />}/>
        <Route path="technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key='i' category="technology" />}/>
        
        </Routes>
          
        </BrowserRouter>
      </div>
    
      
    )
  }
}

