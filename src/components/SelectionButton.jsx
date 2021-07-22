import React from 'react';

const SelectionButton = (props) => {

    const {text, onSelectChoice} = props;

    return ( 
        <div className="selection-button" onClick={() => onSelectChoice(text)}>{text}</div>
     );
}
 
export default SelectionButton;