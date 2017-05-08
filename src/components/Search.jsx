/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import Map from './Map.jsx';
import SearchInputs from './SearchInputs.jsx';
import Results from './Results.jsx';
import { cyan300, indigo900 } from 'material-ui/styles/colors';


//Begin class definition
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }


    searchSizer() {
        const { container} = this.props;
        const { offsetHeight, offsetWidth } = container;
        this.setState({ offsetHeight, offsetWidth });
    }

    render() {
        const { displayResult, displayAddResource, displaySearch, filterResources, onGoogleApiLoad, getSearchstring, getFilteredResources, getPageLoading, userLat, userLng } = this.props;
        var { offsetWidth, offsetHeight} = this.state;
        if (offsetWidth=== undefined) {
            return null;
        }

        var filteredResources = getFilteredResources();

        return (
        <div width={offsetWidth} style={{display:'flex', flexDirection:'row'}}>
        <div style={{width: ((offsetWidth*0.40)), height: offsetHeight, overflow: 'auto', padding:10}}>
          <Results getFilteredResources={getFilteredResources} displayResult={displayResult} displaySearch={displaySearch} displayAddResource={displayAddResource} getPageLoading={getPageLoading} getSearchstring={getSearchstring}  userLat={userLat} userLng={userLng}/>
        </div>
        <div style={{padding:10}}>
        <Map width={(offsetWidth*0.60)} height='100%' getFilteredResources={getFilteredResources} displayResult={displayResult} onGoogleApiLoad={onGoogleApiLoad} userLat={userLat} userLng={userLng} center={[userLat,userLng]}/>
        </div>

      </div>
        );
    }

}
