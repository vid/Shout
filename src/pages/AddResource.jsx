// JavaScript source code
import React from 'react';

export default class AddResource extends React.Component {
  render () {
    const {displaySearch} = this.props;
    return (

      <div>
           <div className="hello" onClick={displaySearch}>
               « Back to search
           </div>    
        add resource
      </div>
    );
  }
}