import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './css/main.css';

import TodoApp from './pages/todoapp/TodoApp';
import PasswordStrength from './pages/passwordstrength/PasswordStrength';

function RoutesIndex() {
    return (
        <Router>
            <div className="default-list">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pages/passwordstrength">Password Strength</Link>
                    </li>
                    <li>
                        <Link to="/pages/todoapp">Todo App</Link>
                    </li>
                </ul>


                {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
                <Switch>
                    <Route path="/pages/passwordstrength">
                        <PasswordStrength />
                    </Route>
                    <Route path="/pages/todoapp">
                        <TodoApp />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default RoutesIndex;
