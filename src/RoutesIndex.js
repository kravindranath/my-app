import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './css/main.css';

import TodoApp from './pages/todoapp/TodoApp';
import PasswordStrength from './pages/passwordstrength/PasswordStrength';
import Home from './pages/home';
import ToggleButton from './components/ToggleButton';


function HamburgerMenu(props) {
    var navToggle = props.navToggle;

    return(
        <div className="showHide" onClick={navToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

function RoutesIndex(props) {

    const mode = props.mode,
        toggleMode = props.toggleMode,
        showHideNav = props.showHideNav,
        navToggle = props.navToggle;

    return (
        <Router>
            <ToggleButton className="toggleButton" mode={mode} onClickHandle={toggleMode} />
            <HamburgerMenu navToggle={navToggle} />
            <nav className={`nav ${mode} ${showHideNav}`}>
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
