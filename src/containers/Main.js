import React, { Component } from 'react';
import ApiRequester from '../components/ApiRequester'

class Main extends Component {

    render () {
        return (
            <div>
                <header>
                <ApiRequester/>
                </header>
            </div>
        );
    }
}

export default Main;