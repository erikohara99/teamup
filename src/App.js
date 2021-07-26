import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ChampList from './components/ChampList';
import SelectionBox from './components/SelectionBox';
import ItemList from './components/ItemList';
import SelectionButtonList from './components/SelectionButtonList';
import ItemBox from './components/ItemBox';

class App extends Component {
  state = { 
    champs: [],
    items: [],
    list: "Champions",
    currentChamp: {
      name: "",
      partype: "",
      stats: {},
      image: "",
      title: ""
    },
    currentItems: []
 }

  async componentDidMount() {
      const champs = await axios.get('http://localhost:3000/api/league/champions');
      const items = await axios.get('http://localhost:3000/api/league/items');

      const champList = Object.values(champs.data.data);
      const itemList = Object.values(items.data.data);
      
      this.setState({champs: champList});
      this.setState({items: itemList});
  }

  handleSelectChamp = (champ) => {
    var selection = this.state.currentChamp;

    selection.name = champ.name;
    selection.partype = champ.partype;
    selection.stats = champ.stats;
    selection.stats.abilityhaste = 0;
    selection.stats.abilitypower = 0;
    selection.image = champ.image.full;
    selection.title = champ.title;

    this.setState({currentChamp: selection});
  }

  handleSelectItem = (item) => {
    var items = this.state.currentItems;

    if(items.length >= 6) return null;
    items.push(item);

    this.setState({currentItems: items});
  }

  handleItemRemove = (item) => {
    var items = this.state.currentItems;
    var index = items.indexOf(item);
    items.splice(index, 1);

    this.setState({currentItems: items});
  }

  handleSelectChoice = (text) => {
    this.setState({list: text});
  }

  render() { 
      return ( 
        <React.Fragment>

          <div className="selection-boxes-container">
            <SelectionBox champ={this.state.currentChamp} />
            <ItemBox items={this.state.currentItems} onSelect={this.handleItemRemove} />
          </div>

          <SelectionButtonList active={this.state.list} onSelectChoice = {this.handleSelectChoice}/>
          {this.state.list === "Champions" ?
            <ChampList champs={this.state.champs} onSelect={this.handleSelectChamp}/>
            : <ItemList items={this.state.items} onSelect={this.handleSelectItem}/>}

        </React.Fragment>
      );
  }
}
 
export default App;
