import React, {Component} from 'react';
import axios from 'axios';
import PokemonItem from './PokemonItem.js';
import "../CSS/style.css";

export default class Home extends Component {

    constructor(props) {
      super(props)
      this.state = {
        linkAPI: 'https://pokeapi.co/api/v2/pokemon'
      }
    }
  
    //function which is called the first time the component loads
    componentDidMount() {
      this.getListPokemon(this.state.linkAPI);
    }

    //Function which is called whenver the component is updated
    // componentDidUpdate(prevState) {

    //     if (this.state.linkAPI !== prevState.linkAPI) {
    //         this.getListPokemon(this.state.linkAPI)
    //     }
    // }
  
    getListPokemon = (url) => {
        axios.get(url).then(response => {
          this.setState({
            listPokemon: response.data,
          });
          if(response.data.previous == null) {
            this.setState({
              prev: false,
            });
          } else {
            this.setState({
              prev: true,
              linkPrev: response.data.previous
            });
          }

          if(response.data.next == null) {
            this.setState({
              next: false,
            });
          } else {
            this.setState({
              next: true,
              linkNext: response.data.next
            });
          }

        })        
        .catch(err => {
          console.log('11', err)
      })
    };
    
    render() {
      if (!this.state.listPokemon)
        return (<p>Loading data</p>)
      return (<div className="row addmargin">
        <div className="col-md-12 com-12 list-pokemon">
            <h1>List Pokemon</h1>
            <ul className="padding-md">
                {
                    this.state.listPokemon.results.map(pokemon => <li key={pokemon.name} className="centeralign">
                    <PokemonItem url={pokemon.url}/>
                </li>)
                }
            </ul>
          
        </div>
        <div className="col-md-12 com-12 float-right list-pagination">
          <span className={"prev " + (this.state.prev ? 'active' : 'disable')} 
          onClick={() => this.setState({linkAPI: this.state.linkPrev})}>
            prev
          </span>  
          <span className={"next " + (this.state.next ? 'active' : 'disable')}
          onClick={() => this.setState({linkAPI: this.state.linkNext})}>
            next
          </span>
        </div>
      </div>)
    }
  
  }
