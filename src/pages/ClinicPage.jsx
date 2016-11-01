'use strict';

import React,  {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText, CardTitle, CardMedia} from 'material-ui/Card';

const style = {
    height: '30%',
    width: '30%',
    margin: 20,
    alignment: 'right',
    display: 'inline-block',
};


export default class ClinicPage extends React.Component {
  render () {
    const {result} = this.props;
    const {displaySearch} = this.props;

    return (
      <div id='clinicpage'>
        <div className="hello" onClick={displaySearch}>
          « Back to search
        </div>    
          <Card>
        <CardHeader
          title="Overview"
          subtitle={result.name}
          avatar=""
          actAsExpander={true}
          showExpandableButton={true}
        />
       
        <CardTitle title={result.name} subtitle={result.civic_address} expandable={true}/>
        <CardText expandable={true}>
             <Paper  style={style}>
          <img src="http://www.emorydailypulse.com/wp-content/uploads/2016/06/grady.jpg" />
            </Paper>
             <Paper>
                 <h2> Description </h2>
                {result.description}
           </Paper>
        </CardText>
        
      </Card>
      <Card>
          <CardHeader
          title="Public Transit Routes"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
         businfo
        </CardText>
      </Card>
      <Card>
          <CardHeader
          title="Feedback"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          feedback
        </CardText>
      </Card>
      <Card>
          <CardHeader
        title="Submit Feedback"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        feedback
      </CardText>
    </Card>
    <Card>
          <CardHeader
      title="Update"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      feedback
    </CardText>
  </Card>
  <Card>
          <CardHeader
    title="Flag this content"
    actAsExpander={true}
    showExpandableButton={true}
  />
  <CardText expandable={true}>
    feedback
  </CardText>
</Card>
      </div>
    );
  }
}
