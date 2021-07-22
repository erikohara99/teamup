import React from 'react';
import ItemCard from './ItemCard';

const ItemList = (props) => {
    return ( 
        <div className="card-container">
            {props.items.map(item => {
                return (
                    <ItemCard key={item.key} item={item} onSelect={props.onSelect}/>
                );
            })}
        </div>
     );
}
 
export default ItemList;