import React from 'react';

const ValidationComponent = (props) => {
    let leng = props.textLength > 5 ? 'Text long enough' : 'Text too short';
    return <p>{leng}</p>
}

export default ValidationComponent;