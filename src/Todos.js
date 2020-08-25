import React from 'react';

function Todos(props) {
    var data = props.todos || [],
    markup = [];
    data.forEach((elem) => {
        return (
            markup.push(
            <li key={elem.id}>
                <input type="checkbox" className="chkBox" />
                {elem.name}
            </li>
            )
        );
    });

    return (
        <ul>
           {markup}
        </ul>
    );
}

export default Todos;
