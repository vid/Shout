/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';

const styles = {
    hint: {
        color: '#01579B',
    },
    input: {
        marginTop: 7,
        marginRight:10,
        width: '100%',
        paddingLeft:10
    },
};

export default class SearchInputs extends React.Component {

    render() {
        const { filterResources, getSearchstring} = this.props;
        var searchString=getSearchstring();
        return (
        <div style={{display:'flex', flexDirection:'row'}}>
        <Paper style={styles.input}>
          <b>Find:   </b>
          <TextField
            onChange={e => filterResources(e.target.value)}
            hintText="  e.g. 'pregnancy test' "
            hintStyle={styles.hint}
            />
        </Paper>
        </div>
        );
    }
}
