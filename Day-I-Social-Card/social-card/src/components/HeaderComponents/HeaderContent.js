import React from 'react';
import './Header.css';

function HeaderContent(props){
    return(
        <div>
            <p>{props.text}</p>
        </div>
    );
}
export default HeaderContent;