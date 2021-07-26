import React, { Component } from 'react';

class Selection extends Component {
    state = {  }
    render() { 

        const image = this.props.champ.image === "" ? null : <img id="selection-image" src={`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${this.props.champ.image}`}></img>
        const {champ} = this.props;

        return ( 
            <div className="selection-container sc-champ">
                <div className="selection-text">
                    {image}
                    <h1>{champ.name}</h1>
                    <h4>{champ.title}</h4>
                </div>
                <div className="selection-stats">
                    <h1>{champ.stats.attackdamage}</h1>
                    <h1>{champ.stats.abilitypower}</h1>
                    <h1>{champ.stats.armor}</h1>
                    <h1>{champ.stats.spellblock}</h1>
                    <h1>{(champ.stats.attackspeed * (1 + champ.stats.attackspeedmod)).toFixed(3)}</h1>
                    <h1>{champ.stats.abilityhaste}</h1>
                    <h1>{champ.stats.crit}</h1>
                    <h1>{champ.stats.movespeed}</h1>
                </div>
            </div>
         );
    }
}
 
export default Selection;