/* jslint node: true, esnext: true */
'use strict';

import React from 'react';

import Map from './Map.jsx';
import SearchInputs from './SearchInputs.jsx';
import Results from './Results.jsx';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
    main: {
        padding: '1% 2% 5% 5%',
        alignment: 'right',
        overflow: 'auto'
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        height:'100%',
        backgroundColor:cyan500,
        height:'100%',
        color:'white'
    },
}

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    const {displayResult, displayAddResource, filterResources, onGoogleApiLoad, searchString, getFilteredResources, userLat, userLng} = this.props;
    const {offsetWidth, offsetHeight, footerOffsetHeight} = this.state;
    if (offsetHeight === undefined) {
      return null;
    }
    return (
      <div>
        <div style={styles.row}>
        <SearchInputs filterResources={filterResources} searchString={searchString}/>
        <div style={styles.blurb}>Shout(beta) is a free, open-source tool to empower minorities and disenfranchised healthcare users by allowing them to share tips on where to find accessible healthcare. Click <a href='http://eepurl.com/cvWx3b'>here</a> to join our mailing list and get involved. </div>
        </div>
        <Map width={offsetWidth} height={(offsetHeight / 2) - footerOffsetHeight} getFilteredResources={getFilteredResources} onGoogleApiLoad={onGoogleApiLoad} userLat={userLat} userLng={userLng}/>
        <div style={{height: (offsetHeight / 2), overflow: 'auto'}}>
          <Results getFilteredResources={getFilteredResources} displayResult={displayResult} displayAddResource={displayAddResource}/>
        </div>
      </div>
    );
  }
  searchSizer () {
    const {container, footer} = this.props;
    const {offsetHeight, offsetWidth} = container;
    const footerOffsetHeight = footer.offsetHeight;
    this.setState({offsetHeight, offsetWidth, footerOffsetHeight});
  }
  componentDidMount () {
    this.searchSizer();
    window.addEventListener('resize', () => this.searchSizer(), false);
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.searchSizer, false);
  }

}
