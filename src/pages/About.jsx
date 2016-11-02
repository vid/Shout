// JavaScript source code
import React from 'react';

export default class About extends React.Component {
    render () {
        const {displaySearch} = this.props;
        return (

          <div>
               <div className="hello" onClick={displaySearch}>
                   « Back to search
               </div>    
    <h1> About </h1>
  </div>
    );
}
}