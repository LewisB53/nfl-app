import React, { Component } from 'react';
import ApiRequester from '../components/ApiRequester'
import './Main.css'
import {Route,Link} from 'react-router-dom';

class Main extends Component {

    render () {
        return (
            <div className = 'Main'>
                <header>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to ="/Roster">Roster</Link></li>

                    </ul>
                <ApiRequester/>
                </header>
            </div>
        );
    }
}

export default Main;