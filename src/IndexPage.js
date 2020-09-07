import React from 'react';
import { Link } from 'react-router-dom';
import routesConfig from './routesConfig';

function IndexPage(props) {
    var lists = [],
    list,
    skipHome = props.skipHome || false,
    skipDesc = props.skipDesc || false;


    routesConfig.forEach((_elem,i) => {
        var elem = _elem || {},
        href = elem.path,
        text = elem.text,
        desc = elem.desc;
        if(skipHome && (href === '/')) {
            console.log(elem, skipHome)
            href = null;
        }
        if(skipDesc && (desc !== '')) {
            desc = null;
        }

        if(href) {
            list = (
                <li key={`l-${i}`}>
                    <Link to={href}>{text}</Link>
                    <p>{desc}</p>
                </li>
            );
        }
        lists.push(list);
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