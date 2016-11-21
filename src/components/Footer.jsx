/* jslint node: true, esnext: true */
'use strict';

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

const recentsIcon = <ActionRestore />;
const favoritesIcon = <ActionFavorite />;
const nearbyIcon = <IconLocationOn />;

export default class Footer extends Component {

  render() {

  const {selectedIndex}=this.props;
  const {onSelect}=this.props;

    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onTouchTap={() => onSelect(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onTouchTap={() => onSelect(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => onSelect(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
