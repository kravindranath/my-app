import React from 'react';

function Todos(props) {
    var data = props.todos || [{}],
        markup = [];

    data.forEach((elem) => {

        if (!(elem.id || elem.status)) return;
        var isChecked = (elem.status === true) ? true : null;

        markup.push(
            <li key={elem.id} className={`isChecked-${isChecked}`}>
                <input ref={React.createRef()}
                    name={elem.id}
                    type="checkbox"
                    className="chkBox"
                    onClick={props.onClickChkBox}
                    value={elem.id}
                    defaultChecked={isChecked} />
                {elem.name}
            </li>
        )
    });

    return (
        <div className="default-list">
            <ul>
                {markup}
            </ul>
        </div>
    );
}

export default Todos;
