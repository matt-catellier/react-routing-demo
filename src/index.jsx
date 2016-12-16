import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';

// const Home = () => <h1> hello world ssss </h1>;
class Home extends Component {
    render() {
        return <h1> hello world ssss </h1>
    }
}

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Home } />
    </Router>,
    document.getElementById('container')
)
