import React, {Component} from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import '../CSS/style.css'

export default class PokemonItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkReady: false
        }
    }
  
    //function which is called the first time the component loads
    componentDidMount() {
      this.getDetailPokemon(this.props.url);

    }

    //Function which is called whenver the component is updated
    componentDidUpdate(prevProps) {

        //get Pokemon Details only if props has changed
        if (this.props.url !== prevProps.url) {
            this.getDetailPokemon(this.props.url)
        }
    }
  
    getDetailPokemon = (url) => {
        axios.get(url).then(response => {
            this.setState({
                detailPokemon: response.data,
                linkReady: true,
                downloadedData: "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(response.data))
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
            <div className="item-container">
                <div className="pokemon-image">
                    <img src={this.state.detailPokemon.sprites.front_default} />
                </div>
                <div className="pokemon-name">
                    <a href={"/#/"+this.state.detailPokemon.name}>
                    {this.state.detailPokemon.name}
                    </a>
                </div>
            </div>
        )
  }

}
