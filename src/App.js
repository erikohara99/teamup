import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ChampList from './components/ChampList';
import Selection from './components/Selection';
import ItemList from './components/ItemList';
import SelectionButtonList from './components/SelectionButtonList';

class App extends Component {
  state = { 
    champs: [],
    items: [],
    list: "Champions",
    current: {
      name: "",
      partype: "",
      stats: {},
      image: "",
      title: ""
    }
 }

  async componentDidMount() {
      const champs = await axios.get('http://localhost:3000/api/league/champions');
      const items = await axios.get('http://localhost:3000/api/league/items');

      const champList = Object.values(champs.data.data);
      const itemList = Object.values(items.data.data);
      
      this.setState({champs: champList});
      this.setState({items: itemList});
  }

  handleSelect = (champ) => {
    var selection = this.state.current;

    selection.name = champ.name;
    selection.partype = champ.partype;
    selection.stats = champ.stats;
    selection.stats.abilityhaste = 0;
    selection.stats.abilitypower = 0;
    selection.image = champ.image.full;
    selection.title = champ.title;

    this.setState({current: selection});
  }

  handleSelectChoice = (text) => {
    this.setState({list: text});
  }

  render() { 
      return ( 
        <React.Fragment>
            <Selection champ={this.state.current} />
            <SelectionButtonList active={this.state.list} onSelectChoice = {this.handleSelectChoice}/>
            {this.state.list === "Champions" ?
              <ChampList champs={this.state.champs} onSelect={this.handleSelect}/>
              : <ItemList items={this.state.items}/>}
        </React.Fragment>
      );
  }
}
 
export default App;
