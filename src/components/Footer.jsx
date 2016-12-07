/* jslint node: true, esnext: true */
'use strict';

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

import ActionHome from 'material-ui/svg-icons/action/home';

import ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman';

import PlacesChildCare from 'material-ui/svg-icons/places/child-care';

const recentsIcon = <ActionRestore />;
const favoritesIcon = <ActionFavorite />;
const nearbyIcon = <IconLocationOn />;

const styles = {
  footerLabel: {
    height:'100%',
    color:'black',
    backgroundColor:'cyan'
  },
};
export default class Footer extends Component {

  render() {

  const {selectedIndex}=this.props;
  const {onSelect}=this.props;

    return (
      <Paper zDepth={1} style={styles.footerLabel}>
        <BottomNavigation selectedIndex={selectedIndex}>
          <BottomNavigationItem
            label="Children"
            icon={<PlacesChildCare />}
            onTouchTap={() => onSelect(0)}
          />
          <BottomNavigationItem
            label="Adolescent"
            icon={favoritesIcon}
            onTouchTap={() => onSelect(1)}
          />
          <BottomNavigationItem
            label="Pregnancy"
            icon={<ActionPregnantWoman />}
            onTouchTap={() => onSelect(2)}
          />
          <BottomNavigationItem
            label="Near Me"
            icon={nearbyIcon}
            onTouchTap={() => onSelect(3)}
          />
          <BottomNavigationItem
            label="Housing"
            icon={<ActionHome />}
            onTouchTap={() => onSelect(4)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
