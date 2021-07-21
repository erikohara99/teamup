import React, { Component } from 'react';

class Selection extends Component {
    state = {  }
    render() { 

        const image = this.props.champ.image === "" ? null : <img id="selection-image" src={`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${this.props.champ.image}`}></img>

        return ( 
            <div className="selection-container">
                <div className="selection-text">
                    {image}
                    <h1>{this.props.champ.name}</h1>
                    <h4>{this.props.champ.title}</h4>
                </div>
                <div className="selection-stats">
                    <h1>{this.props.champ.stats.attackdamage}</h1>
                    <h1>{this.props.champ.stats.abilitypower}</h1>
                    <h1>{this.props.champ.stats.armor}</h1>
                    <h1>{this.props.champ.stats.spellblock}</h1>
                    <h1>{this.props.champ.stats.attackspeed}</h1>
                    <h1>{this.props.champ.stats.abilityhaste}</h1>
                    <h1>{this.props.champ.stats.crit}</h1>
                    <h1>{this.props.champ.stats.movespeed}</h1>
                </div>
            </div>
         );
    }
}
 
export default Selection;