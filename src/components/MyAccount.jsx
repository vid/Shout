/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';

import Paper from 'material-ui/Paper';



const styles = {

    main: {
        padding:15,
        opacity:0.8,
        width:'100%',
        alignment: 'right',
        overflow: 'auto'
    },


    section: {
        padding: '1% 2% 5% 5%',
    },

    info: {
        padding:12,
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

    formatData(userinfo){

      if(userinfo){

        var email=userinfo.email;
        var usertype=userinfo.usertype;
        var zip=userinfo.zip;

        if(!email){
          email="";
          usertype="";
          zip="";
        }
        return (<div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Name:</h4><div style={styles.info}>{userinfo.name}</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Email:</h4><div style={styles.info}>{email}</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Type:</h4><div style={styles.info}>{usertype}</div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        <h4>Zip:</h4><div style={styles.info}>{zip}</div>
        </div>
        </div>)

      }else return "no data found"

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

        const { getLoggedIn, getUserinfo} = this.props;
        const { offsetWidth, offsetHeight} = this.state;

        var userinfo=getUserinfo();

        if (offsetHeight === undefined) {
            return null;
        }


        return (

        <Paper style={styles.main}>

          {this.formatData(userinfo)}
        </Paper>
        );
    }
}
