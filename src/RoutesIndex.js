import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/main.css';

import ToggleButton from './components/ToggleButton';
import routesConfig from './routesConfig';
import IndexPage from './IndexPage';

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
        navToggle = props.navToggle,
        routesArr = [];

        routesConfig.forEach((r,i) => {
            var RenderComponent = r.component;
            routesArr.push(
                <Route key={`sd-${i}`} exact path={r.path}>
                    <RenderComponent {...r.customProps} />
                </Route>
            );
        });

    return (
        <Router>
            <ToggleButton className="toggleButton" mode={mode} onClickHandle={toggleMode} />
            <HamburgerMenu navToggle={navToggle} />
            <nav className={`nav ${mode} ${showHideNav}`}>
                <IndexPage skipDesc={true} />
            </nav>
            <section className={`main ${mode}`}>
                <Switch>
                    {routesArr}
                </Switch>
            </section>
        </Router>
    );
}

export default RoutesIndex;
