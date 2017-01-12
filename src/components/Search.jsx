/* jslint node: true, esnext: true */
'use strict';

import React from 'react';

import Map from './Map.jsx';
import SearchInputs from './SearchInputs.jsx';
import Results from './Results.jsx';


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
      <SearchInputs filterResources={filterResources} searchString={searchString}/>
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
