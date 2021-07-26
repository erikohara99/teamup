import React from 'react';

const SelectionButton = (props) => {

    const {text, active, onSelectChoice} = props;

    const classes = "selection-button" + (text === active ? " button-active" : "");

    return ( 
        <div className={classes} onClick={() => onSelectChoice(text)}>{text}</div>
     );
}
 
export default SelectionButton;