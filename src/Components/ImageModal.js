import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../CSS/style.css'

export default class ImageModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        // console.log(this.props.show);
        this.Modal(this.props.handleClose, this.props.show, this.props.images);
    }

    //Function which is called whenver the component is updated
    componentDidUpdate(prevProps) {

        //get Pokemon Details only if props has changed
        if (this.props.show !== prevProps.show) {
            console.log("udah");
            console.log(this.props.show);
            this.Modal(this.props.handleClose, this.props.show, this.props.images);
        }
    }

    Modal = (handleClose, show) => {
        this.setState({
            showHideClassName: show ? "modal display-block" : "modal display-none"
        })
        console.log(handleClose);
    };

    render() {        
        return (
            <div className={this.state.showHideClassName}>
                <section className="modal-main">
                   <div className="row list-image-wrapper">
                        <div className="col-md-6 col-6">
                            <img src={this.props.images.back_default}></img>
                        </div>
                        <div className="col-md-6 col-6">
                            <img src={this.props.images.back_shiny}></img>
                        </div>
                        <div className="col-md-6 col-6">
                            <img src={this.props.images.front_default}></img>
                        </div>
                        <div className="col-md-6 col-6">
                            <img src={this.props.images.front_shiny}></img>
                        </div>
                   </div>
                    <button className="m-3 float-right btn btn-primary" onClick={this.props.handleClose}>close</button>
                </section>
            </div>
        )
        
  }

}
