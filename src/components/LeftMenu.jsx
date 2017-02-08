import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';


import ContentAdd from 'material-ui/svg-icons/content/add';
import SocialShare from 'material-ui/svg-icons/social/share';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionBook from 'material-ui/svg-icons/action/book';
import ContentMail from 'material-ui/svg-icons/content/mail';
import MapsEditLocation from 'material-ui/svg-icons/maps/edit-location';
import SocialPerson from 'material-ui/svg-icons/social/person';


import AddResource from './AddResource.jsx';

export default class LeftMenu extends React.Component {
    constructor() {
        super()

        this.state = {
            changelocationOpen: false,
            aboutOpen: false,
            addResourceOpen: false,
        };

    }

    render() {

        const { displayAddResource } = this.props;

        const { addResource } = this.props;
        const { displayAbout } = this.props;




        return (
            <div id='menu'>
            <MenuItem primaryText="" />
            <MenuItem primaryText="" />
            <MenuItem primaryText="" />
            <MenuItem primaryText="Add New Resource" leftIcon={<ContentAdd />} onTouchTap={() => displayAddResource()}/>
            <MenuItem primaryText="Change Location" leftIcon={<MapsEditLocation />} onTouchTap={() => this.setState({changelocationOpen: true})}/>

            <Divider />

            <MenuItem primaryText="About" leftIcon={<SocialPerson />} onTouchTap={() => this.setState({aboutOpen: true})}/>
            <MenuItem primaryText="Blog" leftIcon={<ActionBook />} target="_blank" href="http://www.shoutforhealth.org/blog-2/"/>
            <MenuItem primaryText="Listserv" leftIcon={<ContentMail />} target="_blank" href="http://eepurl.com/cvWx3b"/>


{/* Below: material-UI hidden Dialogs that will show conditionally */}

            <Dialog
                title="Change your location"
                actions={[
                   <FlatButton
                     label="Cancel"
                     primary={true}
                     onTouchTap={() => this.setState({changelocationOpen: false})}/>,
                   <FlatButton
                     label="Submit"
                     primary={true}
                     keyboardFocused={true}
                     onTouchTap={() => this.setState({changelocationOpen: false})}/>]}
                modal={false}
                open={this.state.changelocationOpen}
                onRequestClose={() => this.setState({changelocationOpen: false})}>

                <div>
                Shout is currently only active in Atlanta. Stay tuned for other cities.
                </div>
                <SelectField
                    floatingLabelText="Select a city"
                    value={1}
                  >
                  <MenuItem value={1} primaryText="Atlanta" />
                </SelectField>
            </Dialog>

            <Dialog
                actions={
                   <FlatButton
                     label="Close"
                     primary={true}
                     onTouchTap={() => this.setState({aboutOpen: false})}/>}
                modal={false}
                open={this.state.aboutOpen}
                onRequestClose={() => this.setState({aboutOpen: false})}>

                <h1>
                About
                </h1>
                <p>
                We believe that the best way to spread healthcare information among marginalized communities is to empower them to inform themselves and each other.
                Read more about our mission at www.shoutforhealth.org
                </p>
            </Dialog>


            </div>
        )
    }
}
