import React from 'react';


function list(props) {
    return (
        <div className='lists'>
            <li key ={props.keys}>
                <p>{props.text}</p>
                <p>{props.value}</p>
                <button className='butdel' onClick={props.id}>Delete</button>
            </li>
        </div>
    );
}

export default list;