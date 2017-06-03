// https://github.com/callemall/material-ui/issues/4535
// This is a workaround to prevent onCellClick from triggering
// when a button on the row is clicked

import React from 'react';
import {TableRowColumn} from 'material-ui';

const TableRowColumnWrapper = React.createClass({

    render() {
        return (
            <TableRowColumn style={this.props.style} onCellClick={this.props.onCellClick}>
                {this.props.children}
            </TableRowColumn>
        );
    }
});

export default TableRowColumnWrapper;
