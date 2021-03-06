import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/header'
import Menu from './layout/menu'
import Slide from './layout/slide'
import Sidebar from './layout/sidebar'
import Product from './product'
import Footer from './layout/footer'


export default function AppContainer() {
  return (
    <Router>
      <Header />
      <div id="body">
        <div class="container">
          <Menu />
          <div class="row">
            <div id="main" class="col-lg-8 col-md-12 col-sm-12">
              <Slide />
              <Product />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  )
}
