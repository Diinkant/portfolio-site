import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education'

class App extends Component {
    render() {
      return (
        <div id="colorlib-page">
          <div id="container-wrap">
               <Navbar></Navbar>
                  <div id="colorlib-main">
                      <Home></Home>
                      <About></About>
                      <Skills></Skills>
                      <Education></Education>
                </div>
            </div>
        </div>
      );
    }
  }

export default App;