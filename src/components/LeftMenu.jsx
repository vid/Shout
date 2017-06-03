import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/Menu';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';


import Icon from 'material-ui/Icon';


import AddResource from './AddResource.jsx';
import UpdateDocs from './UpdateDocs.jsx';


export default class LeftMenu extends React.Component {
    constructor() {
        super()

        this.state = {
            changelocationOpen: false,
        };

    }

    render() {

        const { displayAddResource, addResource, displayAbout, displayUpdateDocs, displayApproveDocs} = this.props;




        return (
            <div id='menu'>
            <MenuItem primaryText="" />
            <MenuItem primaryText="Add New Resource" leftIcon={<Icon>content_add</Icon>} onTouchTap={() => displayAddResource()}/>
            <MenuItem primaryText="About" leftIcon={<Icon>social_person</Icon>} onTouchTap={() => displayAbout()}/>
            <MenuItem primaryText="Update Resources (Admin only)" onTouchTap={() => displayUpdateDocs()}/>
            <MenuItem primaryText="View Pending Resources (Admin only)" onTouchTap={() => displayApproveDocs()}/>
            </div>
        )
    }
}
