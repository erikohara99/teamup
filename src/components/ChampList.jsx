import React, { Component } from 'react';
import ChampCard from './ChampCard';

const ChampList = (props) => {
    return ( 
        <div className="card-container">
            {props.champs.map(champion => {
                return (
                    <ChampCard character={champion} />
                )
            })}
        </div>
     );
}
 
export default ChampList;