import React from 'react'
import { Router, Route, HashRouter, Link, Switch } from 'react-router-dom'
import App from '../App'

function MyRouter() {
    return (
        <HashRouter>
            <div>
                <Route path="/" component={App}></Route>
            </div>
        </HashRouter>
    )
}

export default MyRouter