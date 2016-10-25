import React from 'react';

export default class Result extends React.Component {
  render () {
    const {result} = this.props;
    const {displaySearch} = this.props;
    return (
      <div>
        <div className="hello" onClick={displaySearch}>
          « Back to search
        </div>
        {result.name}
      </div>
    );
  }
}
