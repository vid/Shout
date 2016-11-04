import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


import ContentAdd from 'material-ui/svg-icons/content/add';
import SocialShare from 'material-ui/svg-icons/social/share';
import ActionSearch from 'material-ui/svg-icons/action/search';
import MapsEditLocation from 'material-ui/svg-icons/maps/edit-location';
import SocialPerson from 'material-ui/svg-icons/social/person';


import Divider from 'material-ui/Divider';

export default class LeftMenu extends React.Component {
    constructor() {
        super()
    }
    render(){

        const {displayAddResource} = this.props;
        const {displayAbout} = this.props;


        return(
        <div id='menu'>
            <MenuItem primaryText="New Search" leftIcon={<ActionSearch />}/>
            <MenuItem primaryText="Add New Resource" leftIcon={<ContentAdd />} onTouchTap={displayAddResource}/>
            <MenuItem primaryText="Change Location" leftIcon={<MapsEditLocation />}/>
                <Divider />
            <MenuItem primaryText="About" leftIcon={<SocialPerson />} onTouchTap={displayAbout}/>
            <MenuItem primaryText="Invite friends" leftIcon={<SocialShare />}/>
            <MenuItem primaryText="Feedback"  onTouchTap={displayFeedback}/>

            </div>
      )
    }
}
