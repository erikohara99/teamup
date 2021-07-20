import React from 'react';

const ChampCard = (props) => {
    return ( 
        <div className="card-container">
            <div className="card-champ">
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${props.character.image.full}`}></img>
                <div className="card-text">
                    <h1>{props.character.name}</h1>
                    <h3>{props.character.title}</h3>
                </div>
            </div>
        </div>
     );
}
 
export default ChampCard;