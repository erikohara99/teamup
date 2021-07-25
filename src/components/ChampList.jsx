import React from 'react';

const ChampList = (props) => {

    const {onSelect} = props;

    return ( 
        <div className="card-container">
            {props.champs.map(champion => {

                return(
                    <img id="card" src={`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${champion.image.full}`} onClick={() => {onSelect(champion)}}></img>
                );
            })}
        </div>
     );
}
 
export default ChampList;