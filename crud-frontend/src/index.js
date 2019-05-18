import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Actions from './components/Actions';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import 'gestalt/dist/gestalt.css';

const Root = () => (
    <Router>
        <>
            <Navbar />
            <Switch>
                <Route component={App} path="/" exact />
                <Route component={Actions} path="/actions" />
                <Route component={Projects} path="/projects" />
            </Switch>
        </>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
