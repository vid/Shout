/* jslint node: true, esnext: true */
'use strict';

import React from 'react';

import Map from './Map.jsx';
import SearchInputs from './SearchInputs.jsx';
import Results from './Results.jsx';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredRow: -1,
        };
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    hoverRow(key) {
        console.log("changed hovered row");
        this.setState({ hoveredRow: key });
    }

    unhoverRow() {
        this.setState({ hoveredRow: -1 });
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

        //clunky workaround for database not loading until refresh
        if (filteredResources.length < 1) {
            filteredResources = getFilteredResources();
        }

        return (
            <div width={offsetWidth}>
        <Map height={(offsetHeight / 2)} getFilteredResources={getFilteredResources} hoverRow={(key)=>this.hoverRow(key)} unhoverRow={()=>this.unhoverRow()} displayResult={displayResult} onGoogleApiLoad={onGoogleApiLoad} userLat={userLat} userLng={userLng} center={[userLat,userLng]}/>
        <div style={{height: (offsetHeight / 2), overflow: 'auto'}}>
          <Results getFilteredResources={getFilteredResources} displayResult={displayResult} displaySearch={displaySearch} displayAddResource={displayAddResource} getHoveredRow={()=>this.state.hoveredRow} getPageLoading={getPageLoading} getSearchstring={getSearchstring}/>
        </div>
      </div>
        );
    }

}
