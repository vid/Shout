/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';

export default class SearchInputs extends React.Component {
  render () {
    const {filterResources} = this.props;
    return (
      <div>
        <TextField onChange={e => filterResources(e.target.value)} hintText="Search for" />
      </div>
    );
  }
}
