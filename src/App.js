import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Beranda from './Beranda/Beranda.js';
import Mitra from './Mitra/Mitra.js';
import DetailRuang from './Detail/DetailRuang.js';
import Akun from './Akun/Akun.js';
import Pencarian from './Pencarian/Pencarian.js';
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/Mitra" component={Mitra} />
          <Route path="/Detail" component={DetailRuang} />
          <Route path="/Akun" component={Akun} />
          <Route path="/Pencarian" component={Pencarian} />
        </Switch>
      </Router>
    );
  }
}

export default App;
