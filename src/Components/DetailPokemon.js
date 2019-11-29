import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import '../CSS/detail.css';
import '../CSS/style.css';
import ImageModal from './ImageModal.js';

export default class DetailPokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    showModal = () => {
        this.setState({ show: true });
        console.log(this.state.show);
    };

    hideModal = () => {
        this.setState({ show: false });
        console.log("hide");
    };
    
  
    //function which is called the first time the component loads
    componentDidMount() {
        this.getDetailPokemon(this.props.match.params.pokemonName);
    }

    getDetailPokemon = (pokemonName) => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName).then(response => {
            this.setState({
                detailPokemon: response.data,
            })
        })
        .catch(err => {
            console.log('11', err)
        })
    };
  
    
    render() {  
        if (!this.state.detailPokemon)
            return (<p>Loading data</p>)
        return (
            <div className="detail-container">
                <ImageModal show={this.state.show} handleClose={this.hideModal} images={this.state.detailPokemon.sprites}>
                    <p>Modal</p>
                    <p>Data</p>
                </ImageModal>
                <div className="col-md-12 name">
                <h1>
                    {this.state.detailPokemon.name}
                </h1>
                </div>
                <div className="mb-5 image-wrapper">
                    <img className="rounded mx-auto d-block" 
                    src={this.state.detailPokemon.sprites.front_default} onClick={this.showModal}></img>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 data-wrapper">
                        <h3>Pokedex Data</h3>
                        <table className="data-pokedex"> 
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{this.state.detailPokemon.id}</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>
                                        {this.state.detailPokemon.types.map((type, index) => 
                                        <button key={index} className="btn btn-info mr-3">{type.type.name}</button>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Species</th>
                                    <td>{this.state.detailPokemon.species.name}</td>
                                </tr>
                                <tr>
                                    <th>Height</th>
                                    <td>{this.state.detailPokemon.height} m</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>{this.state.detailPokemon.weight} kg</td>
                                </tr>
                                <tr>
                                    <th>Abilities</th>
                                    <td>
                                        <ul>
                                            {this.state.detailPokemon.abilities.map((ability, index) => 
                                            <li key={index} className="">{ability.ability.name} ( {ability.is_hidden ? 'hidden' : 'no-hidden'} ability)</li>)}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6 col-12 states-wrapper">
                        <h3>Base Stats</h3>
                        <div className="states-pokedex">
                            <ol>
                                {this.state.detailPokemon.stats.map((stat, index) => 
                                <li key={index} className="">{stat.stat.name}</li>)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )  
  }

}
