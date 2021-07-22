import React from 'react';
import SelectionButton from './SelectionButton';

const SelectionButtonList = (props) => {

    const {onSelectChoice} = props;

    return ( 
        <div id="selection-button-container">
            <SelectionButton text="Champions" onSelectChoice={onSelectChoice} />
            <SelectionButton text="Items" onSelectChoice={onSelectChoice} />
        </div>
     );
}
 
export default SelectionButtonList;