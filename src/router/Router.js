import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from "../container/main/Main"
import Start from '../container/Start/Start';



export default class Router extends Component {
    render() {
        return (
            <BrowserRouter >
                <>
                    <div>
                    
                        <Route exact path="/" component={()=><Start/>} />
                        <Route exact path="/worldcup" component={()=><Main/>} />
                        <audio
                        src={require("../audio/loverumpumpum.mp3")}
                        autoPlay>     
                        </audio>
                    </div>
                </>
            </BrowserRouter>
        )
    }
}
