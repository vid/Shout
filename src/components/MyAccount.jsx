/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';



const styles = {

    main: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignment: 'right',
        overflow: 'auto'
    },

    section: {
        padding: '1% 2% 5% 5%',
    },

    input: {
        margin:10,
        fontColor: 'black',
    },

    button: {
        fontSize: 12,
        padding: '2px'
    }

};

export default class MyAccount extends React.Component {


    constructor() {
        super();

    }

    searchSizer() {
        const { container} = this.props;
        const { offsetHeight, offsetWidth } = container;
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

        const { addResource, displaySearch, registerNew, loginUser, getLoggedIn, getRegistered} = this.props;
        const { offsetWidth, offsetHeight} = this.state;

        if (offsetHeight === undefined) {
            return null;
        }


        return (

        <div style={{display:'flex', flexDirection:'row', width:'100%'}}>

          Account Info Here
        </div>
        );
    }
}
