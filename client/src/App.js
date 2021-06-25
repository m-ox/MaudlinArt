import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'

export default class App extends Component {

  render() {
      return (
        <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Gallery}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </Router>
        </>
      )
  }
}