import React from 'react';

const ItemBox = (props) => {

    const {items, onSelect} = props;

    return ( 
        <div className="selection-container sc-item">
            <div className="selection-items">
                {items.map(item => {
                    return <img key={item.name} className="hover" src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${item.image.full}`} onClick={() => onSelect(item)}></img>
                })}
            </div>
        </div>
     );
}
 
export default ItemBox;