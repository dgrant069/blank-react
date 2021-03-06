import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Main from '../components/main';
import Home from '../components/views/home/home';

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Main}>
                    <IndexRoute component={Home} />
                </Route>
                <Route path='/address' component={Address} />
            </Router>
        )
    }
}

const Address = () => <h1>We are located at 555 Jackson St.</h1>;

export default Routes;