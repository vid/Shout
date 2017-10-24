/* jslint node: true, esnext: true */
'use strict';

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

export default class SwitchViewButton extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

    const {switchView, getView}=this.props;
    var view=getView();
        return (
            <div style={{width:'100', bottom: '1%', right:'50%', padding: '10px', position:'relative'}}>
                <RaisedButton
                  secondary={true}
                  label={view? "Map View" : "List View"}
                  onTouchTap={()=>switchView()}
                  />
            </div>
        )
    }

}
