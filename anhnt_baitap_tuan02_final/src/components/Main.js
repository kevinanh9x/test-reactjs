import React, { Component, Fragment } from "react";
// import {Fragment}  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Details from "./main-menu/Details";
import Home from "./menu/menu-sub/Home";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home}></Route> */}
          {/* <Route exact path="/html/:id" component={Details} /> */}
          <Route exact path="/detail-html/" component={Details} />
        </Switch>
      </Router>
    );
  }
}
