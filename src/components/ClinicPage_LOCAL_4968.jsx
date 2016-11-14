'use strict';

import React,  {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText, CardTitle, CardMedia} from 'material-ui/Card';
import {cyan200} from 'material-ui/styles/colors';


import UpdateResource from '../components/UpdateResource.jsx';
import FlagContent from '../components/FlagContent.jsx';


const styles = {
    mainStyle: {

        height: '100%',
        width: '100%',
        padding: '5%',
        alignment: 'right',
        display: 'inline-block',
    },

     cardStyle: {
        color: cyan200,
    },

    cardHeaderStyle: {
       color: cyan200,
   },
};


export default class ClinicPage extends React.Component {
  render () {
    const {result} = this.props;
    const {displaySearch} = this.props;

    return (
        <div id='clinicpage'>

        <Paper style={styles.mainStyle} zDepth={1}>


        <div className="hello" onClick={displaySearch}>
          <h3>« Back to search</h3>
        </div>
          <Card>
        <CardHeader
          title="Overview"
          subtitle={result.name}
          avatar=""
          style={styles.cardHeaderStyle}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardTitle title={result.name} subtitle={result.civic_address} expandable={true}/>
        <CardText expandable={true}>
             <Paper  style={styles.cardStyle}>
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
        submit feedback
      </CardText>
    </Card>
    <Card>
          <CardHeader
      title="Update"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <UpdateResource/>
    </CardText>
  </Card>
  <Card>
          <CardHeader
    title="Flag this content"
    actAsExpander={true}
    showExpandableButton={true}
  />
  <CardText expandable={true}>
    <FlagContent />
  </CardText>
</Card>

            </Paper>
      </div>
    );
  }
}
