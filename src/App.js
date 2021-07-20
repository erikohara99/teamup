import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ChampList from './components/ChampList';

class App extends Component {
  state = { 
    champs: []
 }

  async componentDidMount() {
      const request = await axios.get('http://localhost:3000/api/league/champions');
      const champs = Object.values(request.data.data);
      console.log(champs);
      
      this.setState({champs});
  }

  render() { 
      return ( 
          <ChampList champs={this.state.champs} />
      );
  }
}
 
export default App;
