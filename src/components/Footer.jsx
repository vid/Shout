/* jslint node: true, esnext: true */
'use strict';

import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

export default class Footer extends Component {

render() {

  const {selectedIndex}=this.props;
  const {onSelect}=this.props;

    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={selectedIndex}>
        <BottomNavigationItem
          label="View All Results"
          icon={<ActionHome />}
          onTouchTap={() => onSelect(0)}
        />
          <BottomNavigationItem
            label="Favorites"
            icon={<ActionFavorite />}
            onTouchTap={() => onSelect(2)}
          />
          <BottomNavigationItem
            label="Women's Health"
            icon={<ActionPregnantWoman />}
            onTouchTap={() => onSelect(3)}
          />
          <BottomNavigationItem
            label="Dental"
            icon={<ActionFavorite />}
            onTouchTap={() => onSelect(4)}
          />
          <BottomNavigationItem
            label="Vision"
            icon={<ActionVisibility />}
            onTouchTap={() => onSelect(5)}
          />

        </BottomNavigation>
      </Paper>
    );
  }
}
