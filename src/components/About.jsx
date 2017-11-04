/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


const styles = {

    main: {
        padding:15,
        opacity:0.8,
        width:'100%',
        alignment: 'right',
        overflow: 'auto'
    },

};

export default class About extends React.Component {


    constructor() {
        super();

    }

    searchSizer() {
        var offsetHeight = document.getElementById('content').clientHeight
        var offsetWidth = document.getElementById('content').clientWidth
        this.setState({ offsetHeight, offsetWidth});
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    render() {

        const { offsetWidth, offsetHeight} = this.state;

        if (offsetHeight === undefined) {
            return null;
        }


        return (

        <Paper style={styles.main}>
          <h2>Mission</h2>
            <p>Every year, hundreds of Atlanta residents fail to access primary healthcare, even when it’s free. The biggest discrepancy is in marginalized populations- minorities and low-income families.
            Why? A major reason for this is a barrier to information.</p>
            <p>Our Goal: Decentralize information.</p>
            <p>We believe that the best way to achieve good healthcare among marginalized communities is to empower them to inform themselves and each other.</p>

        </Paper>
        );
    }
}
