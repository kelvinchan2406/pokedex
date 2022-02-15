import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card';


class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemons:{}
      // robots:[]
    }
  }
  // fetchPokemonData(pokemon){
  //   let url = pokemon.url,
  //   fetch(url).then(response => response.json()).then(data => console.log(data))
  // }

  // testFunction = () => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=18`).then(response=>response.json())
  //   .then(data => {this.setState({pokemons:data})})
  // }
    // .then(function(allpokemon){
    //   allpokemon.results.forEach(function(pokemon){
    //     fetchPokemonData(pokemon);
    //   });
    // },
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=18`).then(response=>response.json())
    .then(data => {this.setState({pokemons:data})})
  }
    // .then(function(allpokemon){
    //   allpokemon.results.forEach(function(pokemon){
    //       fetchPokemonData(pokemon);
    //   });
    // },


    // .then(data => {this.setState({pokemons:data.results})})
    
  


  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }
  render() {
    return (
      // <Card name={this.state.pokemons[0].name} url={this.state.pokemons[0].url}/>
        // <Card pokemon={this.state.pokemons[0]}/>
        // {console.log(Object.keys(this.state.pokemons[0]))}
          // {console.log(this.state.pokemons.results.name)}
        <div>
          {console.log(this.state.pokemons.results[0].name)}
        </div>
        
        
    );
  }
}

export default App;
