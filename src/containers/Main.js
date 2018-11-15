import React, { Component } from 'react';
import ApiRequester from '../components/ApiRequester'
import PlayerSearch from '../components/PlayerSearch'
import StatsToDate from '../components/StatsToDate'

class Main extends Component {

    render () {
        return (
            <div>
                <header>
                <ApiRequester/>
                <PlayerSearch/>
                <StatsToDate/>
                </header>
            </div>
        );
    }
}

export default Main;