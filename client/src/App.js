import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/pages/Navbar/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import GalleryDetail from './components/pages/Gallery/GalleryDetail'
import Auth from './components/pages/Auth'
import Footer from './components/Footer'

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
            <Route path='/auth' component={Auth}/>
            <Route path='/g/:slug' component={GalleryDetail}/>
          </Switch>

          <Footer />
          
        </Router>
        </>
      )
  }
}