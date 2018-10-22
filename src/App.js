import React, { Component } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Cube from './components/Cube'
import Parallax from './components/Parallax'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <div>
            <Link to="/parallax">Parallax</Link> ||
            <Link to="/cube">Cube</Link>
          </div>
          <div className="App">
            <div className="container">
              <Route path="/" exact={true} component={Cube} />
              <Route path="/cube" exact={true} component={Cube} />
            </div>
            <Route path="/parallax" exact={true} component={Parallax} />
          </div>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
