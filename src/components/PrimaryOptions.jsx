/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import PlacesChildCare from 'material-ui/svg-icons/places/child-care';

const styles = {
    hint: {
        color: '#A9A9A9',
    },
    button: {
        marginTop: 7,
        marginRight:10,
        padding:5
    },
    wrapper:{
        zIndex:'0',
        display:'flex',
        flexDirection:'row',
        padding:8,
        justifyContent: "left",
        overflow: 'auto'
    },
    filterButton: {
        color: 'white',
        margin: 5,
        backgroundColor: '#000000',
        border: 'none',
        borderRadius: 8,
        fontSize: 14,
    },
    selected: {
        color: 'white',
        margin: 5,
        backgroundColor: '#707070',
        border: 'none',
        borderRadius: 8,
        fontSize: 14,
    },
    raisedButton: {
        position: 'relative',
        zIndex: 0,
        color:'#FFFFFF'
    }
};


export default class PrimaryOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        offsetWidth:0
        }
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }


    searchSizer() {
        var offsetHeight = document.getElementById('content').clientHeight
        var offsetWidth = document.getElementById('content').clientWidth
        this.setState({ offsetHeight, offsetWidth });
    }


    render() {
        const {container, getselectedIndex, onSelect } = this.props;
        this.onSelect = onSelect;
        var index = getselectedIndex();
        var { offsetWidth, offsetHeight } = this.state;
        if (offsetWidth=== undefined) {
            return null;
        }



        return (

        <div style={{width:offsetWidth}}>
        <div style={styles.wrapper}>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===100?"#707070":"#000000"}
                hoverColor='#707070'
                label="All Results"
                onTouchTap={()=>onSelect(100)}
                icon={<ActionHome />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===0?"#707070":"#000000"}
                label="Adult"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(0)}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===1?"#707070":"#000000"}
                label="Women's Health"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(1)}
                icon={<ActionPregnantWoman />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===2?"#707070":"#000000"}
                label="Child"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(2)}
                icon={<PlacesChildCare />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===3?"#707070":"#000000"}
                hoverColor='#707070'
                onTouchTap={()=>onSelect(3)}
                label="Mental Health"
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===4?"#707070":"#000000"}
                onTouchTap={()=>onSelect(4)}
                hoverColor='#707070'
                label="Dental"
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===5?"#707070":"#000000"}
                hoverColor='#707070'
                label="Vision"
                onTouchTap={()=>onSelect(5)}
                icon={<ActionVisibility />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===6?"#707070":"#000000"}
                label="Food, Housing, and other"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(6)}
                style={styles.raisedButton}/>
            </div>
        </div>
        </div>
        );
    }
}
