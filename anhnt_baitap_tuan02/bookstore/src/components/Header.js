import React, {Component} from 'react';
import Navigation from './menu/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Html from './menu/menu-sub/Html';
import Css from './menu/menu-sub/Css';
import Javascript from './menu/menu-sub/Javascript';
import Reactjs from './menu/menu-sub/Reactjs';
import Nodejs from './menu/menu-sub/Nodejs';
import Err404 from './menu/menu-sub/Err404';
import Home from './menu/menu-sub/Home';
import HtmlDetails from './main-menu/HtmlDetails';

export default class Header extends Component{
        
    render() {
        
        return (
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/html" component={Html}/>
                    <Route path="/css" component={Css}/>
                    <Route path="/javascript" component={Javascript}/>
                    <Route path="/react" component={Reactjs}/>
                    <Route path="/nodejs" component={Nodejs}/>
                    <Route path="/html/details" component={HtmlDetails}/>
                    <Route path="/:somestring" component={Err404}/>
                </Switch>
            </Router>
        );
      }
    }
