import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ChampList from './components/ChampList';
import Selection from './components/Selection';

class App extends Component {
  state = { 
    champs: [],
    current: {
      name: "",
      partype: "",
      stats: {},
      image: "",
      title: ""
    }
 }

  async componentDidMount() {
      const request = await axios.get('http://localhost:3000/api/league/champions');
      const champs = Object.values(request.data.data);
      
      this.setState({champs});
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

  render() { 
      return ( 
        <React.Fragment>
            <Selection champ={this.state.current} />
            <ChampList champs={this.state.champs} onSelect={this.handleSelect}/>
        </React.Fragment>
      );
  }
}
 
export default App;
