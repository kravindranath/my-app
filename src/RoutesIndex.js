import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './css/main.css';

import TodoApp from './pages/todoapp/TodoApp';
import PasswordStrength from './pages/passwordstrength/PasswordStrength';
import Home from './pages/home';
import ToggleButton from './components/ToggleButton';

function RoutesIndex(props) {

    const mode = props.mode,
        toggleMode = props.toggleMode;

    return (
        <Router>
            <nav className={`nav ${mode}`}>
                <div className="default-list">
                    <ToggleButton className="toggleButton" mode={mode} onClickHandle={toggleMode} />
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
                </div>
            </nav>
            <section className={`main ${mode}`}>
                <Switch>
                    <Route path="/pages/passwordstrength">
                        <PasswordStrength />
                    </Route>
                    <Route path="/pages/todoapp">
                        <TodoApp />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </section>
        </Router>
    );
}

export default RoutesIndex;
