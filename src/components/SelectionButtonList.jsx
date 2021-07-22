import React from 'react';
import SelectionButton from './SelectionButton';

const SelectionButtonList = (props) => {

    const {active, onSelectChoice} = props;

    return ( 
        <div id="selection-button-container">
            <SelectionButton text="Champions" active={active} onSelectChoice={onSelectChoice} />
            <SelectionButton text="Items" active={active} onSelectChoice={onSelectChoice} />
        </div>
     );
}
 
export default SelectionButtonList;