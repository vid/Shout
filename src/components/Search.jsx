/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import Map from './Map.jsx';
import SearchInputs from './SearchInputs.jsx';
import Results from './Results.jsx';
import OptionMenu from './OptionMenu.jsx';
import { cyan300, indigo900 } from 'material-ui/styles/colors';


//Begin class definition
export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }


    searchSizer() {
        const { container, footer } = this.props;
        const { offsetHeight, offsetWidth } = container;
        const footerOffsetHeight = footer.offsetHeight;
        this.setState({ offsetHeight, offsetWidth, footerOffsetHeight });
    }

    render() {
        const { displayResult, displayAddResource, displaySearch, filterResources, onGoogleApiLoad, getSearchstring, getFilteredResources, getPageLoading, userLat, userLng } = this.props;
        const { offsetWidth, offsetHeight, footerOffsetHeight } = this.state;
        if (offsetHeight === undefined) {
            return null;
        }

        var filteredResources = getFilteredResources();

        return (
        <div width={offsetWidth}>
        <Map height={(offsetHeight / 3)} getFilteredResources={getFilteredResources} displayResult={displayResult} onGoogleApiLoad={onGoogleApiLoad} userLat={userLat} userLng={userLng} center={[userLat,userLng]}/>
        <div style={{height: 80, width:offsetWidth, overflow: 'auto'}}>
          <OptionMenu filterResources={filterResources} getSearchstring={getSearchstring}/>
        </div>
        <div style={{height: (2*offsetHeight / 3 -80), overflow: 'auto'}}>
          <Results getFilteredResources={getFilteredResources} displayResult={displayResult} displaySearch={displaySearch} displayAddResource={displayAddResource} getPageLoading={getPageLoading} getSearchstring={getSearchstring}/>
        </div>
      </div>
        );
    }

}
