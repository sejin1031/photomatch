import React, { Component } from 'react';
import './Photo.scss';

export default class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            path : ''
        }
    }
    render() {
        return (
            <div className="photoViewer">
                <img src={require("../../img/"+(this.props.path)+".jpg")} alt={this.state.path}/>
            </div>
        )
    }
}
