import React from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {MainContainer} from '../components';

const routes = (
    <Router >
        <Route path='/' component={MainContainer}/>
    </Router>
);

export default routes;
