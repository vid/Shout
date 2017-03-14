/* jslint node: true, esnext: true */
'use strict';

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman';
import PlacesChildCare from 'material-ui/svg-icons/places/child-care';

export default class Footer extends Component {

render() {

  const {selectedIndex}=this.props;
  const {onSelect}=this.props;

    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem
          label="View All"
          icon={<ActionHome />}
          onTouchTap={() => onSelect(0)}
        />
          <BottomNavigationItem
            label="Children"
            icon={<PlacesChildCare />}
            onTouchTap={() => onSelect(1)}
          />
          <BottomNavigationItem
            label="Psychiatric"
            icon={<ActionFavorite />}
            onTouchTap={() => onSelect(2)}
          />
          <BottomNavigationItem
            label="Women"
            icon={<ActionPregnantWoman />}
            onTouchTap={() => onSelect(3)}
          />

        </BottomNavigation>
      </Paper>
    );
  }
}
