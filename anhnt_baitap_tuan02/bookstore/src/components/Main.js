import React, {Component}  from 'react';
// import {Fragment}  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Html from '../components/menu/menu-sub/Html';
// import HtmlDetails from './main-menu/HtmlDetails';
import Home from './menu/menu-sub/Home';



export default class Main extends Component{
        
    render() {
        
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/category/html" component={Html}></Route>
                    {/* <Route exact path="/html/details" component={HtmlDetails}></Route> */}
                </Switch>
            </Router>
        );
      }
    }
