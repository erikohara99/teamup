import React from 'react';

const ItemList = (props) => {

    const {onSelect} = props;

    return ( 
        <div className="card-container">
            {props.items.map(item => {
                return(
                    <img className="hover" id="card" src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${item.image.full}`} onClick={() => {onSelect(item)}}></img>
                );
            })}
        </div>
     );
}
 
export default ItemList;