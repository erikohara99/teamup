import React from 'react';
import ChampCard from './ChampCard';

const ChampList = (props) => {
    return ( 
        <div className="card-container">
            {props.champs.map(champion => {
                return (
                    <ChampCard key={champion.key} character={champion} onSelect={props.onSelect}/>
                );
            })}
        </div>
     );
}
 
export default ChampList;