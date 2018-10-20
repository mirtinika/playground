import React, { Component } from 'react'
import Cube from './components/Cube'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Cube />
        </div>
      </div>
    )
  }
}

export default App
