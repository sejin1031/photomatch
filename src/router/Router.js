import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from "../container/main/Main"

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter >
                <>
                    <Route exact path="/" component={()=><Main/>} />
                </>
            </BrowserRouter>
        )
    }
}
