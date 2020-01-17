import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './Start.scss';

export default class Start extends Component {
    render() {
        return (
            <div id="start">
                
                <div>
                    <img src={require("../../img/덩달아.gif")}/>
                </div>
                <div id="startbutton">
                    <Link to='/worldcup' style={{textDecoration:'none',color:'white'}}>
                        Start!
                        </Link>
                </div>
            </div>
        )
    }
}
