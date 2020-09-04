import React from 'react';
import { Link } from 'react-router-dom';

var pageConfig = [
    {
        to   : '/',
        text : 'Home',
        desc : 'Home Page'
    },
    {
        to   : '/pages/passwordstrength',
        text : 'Password Strength',
        desc : 'Simple App to check password strength'
    },
    {
        to   : '/pages/todoapp',
        text : 'To-dos',
        desc : 'App to make a to-do list using checkboxes'
    }
];

function IndexPage(props) {
    let lists = [],
    skipHome = props.skipHome || false,
    skipDesc = props.skipDesc || false;

    pageConfig.forEach((_elem,i) => {
        let elem = _elem || {},
        href = elem.to,
        text = elem.text,
        desc = elem.desc;
        if(skipHome && (href === '/')) {
            elem = {};
        }
        if(skipDesc && (desc !== '')) {
            desc = null;
        }

        let list = (
            <li key={`l-${i}`}>
                <Link to={href}>{text}</Link>
                <p>{desc}</p>
            </li>
        );
        elem.to && lists.push(list);
    });

    return (
        <div className="default-list indexPage">
            <ul>
                {lists}
            </ul>
        </div>
    );
}

export default IndexPage;