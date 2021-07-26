import React from 'react';

const ItemBox = (props) => {

    const {items} = props;

    return ( 
        <div className="selection-container sc-item">
            <div className="selection-items">
                {items.map(item => {
                    return <img className="hover" src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${item.image.full}`}></img>
                })}
            </div>
        </div>
     );
}
 
export default ItemBox;