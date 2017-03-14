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
        width: '100%'
    },
};

export default class SearchInputs extends React.Component {

    render() {
        const { filterResources, getSearchstring} = this.props;
        var searchString=getSearchstring();
        return (
        <Paper style={styles.input}>
          <TextField
            onChange={e => filterResources(e.target.value)}
            hintText="  Enter any search keyword..."
            hintStyle={styles.hint}
            value={searchString}/>
        </Paper>
        );
    }
}
