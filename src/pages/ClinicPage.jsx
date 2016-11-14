'use strict';

import React,  {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText, CardTitle, CardMedia} from 'material-ui/Card';
import {cyan200} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Rater from 'react-rater';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import StarRating from 'react-star-rating';

import UpdateResource from '../components/UpdateResource.jsx';
import FlagContent from '../components/FlagContent.jsx';



const styles = {
    mainStyle: {
  
        height: '100%',
        width: '100%',
        padding: '2%',
        alignment: 'right',
        display: 'inline-block',
    },

     cardStyle: {
        color: cyan200,
    },

};


export default class ClinicPage extends React.Component {
constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: props.label
      }
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },

    };
  }

  submitFeedback(event){
    this.setState({
    label:event.target.value
    });
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }



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
           <div className="rate-service">
              <h3>Service</h3> 
            
              <Rater/>
            </div>

            <div className="rate-transportation">
              <h3>Transportation</h3> 
                    <Rater />
            </div>

            <div className="rate-qualitycare">
              <h3>Quality of Care</h3> 
                    <Rater />
            </div>
            <div> 
              <h3>Tags:</h3>
               <div style={this.styles.wrapper}>
                    {this.state.chipData.map(this.renderChip, this)}
                </div>
            </div>
            

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
        <div className="feedback-container">

            <div className="rate-service">
              <h3>Service</h3> 

                     <Rater total={5} />
            </div>

            <div className="rate-transportation">
              <h3>Transportation</h3> 
                    <Rater />
            </div>

            <div className="rate-qualitycare">
              <h3>Quality of Care</h3> 
                    <Rater />
            </div>

                <input type="text"   
                         value={this.state.label}              
                       onChange={(event) => this.submitFeedback(event)}/>
                <br />

                 <div style={this.styles.wrapper}>
                     {this.state.chipData.map(this.renderChip, this)}
                 </div>

          <button onClick={this.submitFeedback.bind(this)} className="btn btn-primary">Submit</button>
          </div>
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
       <div className="update-container">
        <h4> Please select all that are applicable </h4>
        <div style={styles.block}>
            <Checkbox
              label="Simple"
              style={styles.checkbox}
            />
            </div>
            <div style={styles.block}>
            <Checkbox
              label="Simple"
              style={styles.checkbox}
            />
            </div>
             <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
            /><br />
            <div style={styles.block}>
            <Checkbox
              label="Simple"
              style={styles.checkbox}
            />  
            </div>
             <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed={true}
            /><br />
            <div style={styles.block}>
            <Checkbox
              label="Simple"
              style={styles.checkbox}
            />
            </div>
             <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
            
              floatingLabelFixed={true}
            /><br />

         
     
    </div>
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

ClinicPage.PropTypes={
  label:React.PropTypes.string,
}