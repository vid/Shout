/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
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
    input: {
        margin: 10,
        marginRight:10,
        paddingLeft:10
    },
    button: {
        marginTop: 7,
        marginRight:10,
        padding:5
    },
};

export default class SearchInputs extends React.Component {

    render() {
        const { filterResources, getSearchstring, selectedIndex, onSelect} = this.props;
        var searchString=getSearchstring();

        return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={styles.button}>
              <RaisedButton
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                label="All Results"
                onTouchTap={()=>onSelect(0)}
                icon={<ActionHome />}/>
            </div>
            <div style={styles.button}>
              <RaisedButton
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                label="Women's Health"
                onTouchTap={()=>onSelect(1)}
                icon={<ActionPregnantWoman />}/>
            </div>
            <div style={styles.button}>
              <RaisedButton
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                label="Child"
                onTouchTap={()=>onSelect(2)}
                icon={<PlacesChildCare />}/>
            </div>
            <div style={styles.button}>
              <RaisedButton
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(3)}
                label="Mental Health"/>
            </div>
            <div style={styles.button}>
              <RaisedButton
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(4)}
                label="Dental"/>
            </div>
            <div style={styles.button}>
              <RaisedButton
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                label="Vision"
                onTouchTap={()=>onSelect(5)}
                icon={<ActionVisibility />}/>
            </div>

            <Paper style={styles.input}>
              {/*<b>Find:   </b>*/}
              {/*<TextField}
              {/*  onChange={e => filterResources(e.target.value)}*/}
              {/*  hintText="  e.g. 'pregnancy test' "*/}
              {/*  hintStyle={styles.hint}*/}
              {/*  />*/}

              <TextField id="pac-input" type="text" placeholder="Address, City, or Zip Code" />

            </Paper>
        </div>
        );
    }
}
