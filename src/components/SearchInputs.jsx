/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    hint: {
        color: '#FFFFFF',
    },
};

export default class SearchInputs extends React.Component {


    render() {
        const { filterResources, getSearchstring} = this.props;
        var searchString=getSearchstring();
        return (
          <div>

                <TextField
                  onChange={e => filterResources(e.target.value)}
                  hintText="  Enter search term..."
                  hintStyle={styles.hint}
                  />
          </div>
        );
    }
}
