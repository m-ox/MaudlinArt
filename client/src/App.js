import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import Home from './components/Home/Home'

import moth from './images/litemoth.png'
import backdrop from './images/backdrop4.png'

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      menuPop: 'show'
    }

    this.handleMenuClick = this.handleMenuClick.bind(this)

  }

  handleMenuClick() {
    if (this.state.menuPop === 'show') {
      this.setState({
        menuPop: 'hide'
      })
    } else {
      this.setState({
        menuPop: 'show'
      })
    }
  }

  render() {
      return (
          <Router>
              <div className="site-content">

                <div className="sidebar">
                  <div className="moth-clicker">
                    <h2>Maudlin Oxalis Art</h2>
                    <img src={moth} className="menu-icon" onClick={() => this.handleMenuClick()} alt="menu icon"/>
                  </div>

                  {this.state.menuPop === 'show' ?
                    <div className='navlinks-wrapper'>
                        <nav>
                            <div className="navlink">
                              <Link to="/">Home</Link>
                            </div>
                            <div className="navlink">
                              <Link to="/about">About</Link>
                            </div>
                            <div className="navlink">
                              <Link to="/gallery">Gallery</Link>
                            </div>
                        </nav>
                    </div>
                  : null}
                </div>
          
                  <Switch>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/gallery">
                      <Gallery />
                    </Route>
                    <Route exact to path="/">
                      <Home />
                    </Route>
                  </Switch>

                  <div className="right-panel" onMouseMove={() => console.log('moving')}>
                    <img src={backdrop} alt="side panel art" />
                  </div>
              </div>
          </Router>
      )
  }
}
