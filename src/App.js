import React, { Component } from 'react'
import Cube from './components/Cube'
import Parallax from './components/Parallax'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Cube />
        </div>
        <div>
          <Parallax />
        </div>
      </div>
    )
  }
}

export default App
