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
import StarRatingComponent from 'react-star-rating-component';

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
        display: 'flex',
        flex:1,
        flexDirection: 'row',
        height:'100%',
    },

    dataStyle:{
      margin:'10px',
      height:'100%',
    },
    chipSection: {
       display: 'flex',
       flexDirection: 'row'
   },
   chipStyle: {
      height: '80%',
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
        flexDirection: 'row',
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
        <Card style ={styles.cardStyle}>

        <CardTitle title={result.name} subtitle={result.civic_address}/>
        <CardText>
            <div style={styles.cardStyle}>
            <div style={styles.dataStyle}>
              <img src="http://www.capn.org/uploads/1/9/7/5/19759919/_6502107.jpg" />
              </div>
              <div style={styles.dataStyle}>
                <h3> Address: </h3>
                {result.civic_address}

                <h3> Phone: </h3>
                {result.phone}
                <div style={styles.chipSection}>

                <h3> Popular Tags: </h3>
                {result.tags.map((tag)=>(<Chip style={styles.chipStyle}>{tag}</Chip>))}
                </div>
                                  <h3> Description </h3>
                  {result.description}
                </div>

            </div>

        </CardText>

      </Card>
      <Card>
          <CardHeader
          title="Public Transit Routes"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
         This feature is under construction.
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

              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={3} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />
            </div>

            <div className="rate-transportation">
              <h3>Transportation</h3>

              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={3} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>

            <div className="rate-qualitycare">
              <h3>Quality of Care</h3>

              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={3} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

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

        <div className="feedback-container">

            <div className="rate-service">
              <h3>Overall</h3>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={result.rating.overall} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={()=>this.setState(rating.accessibility)}
              />

            </div>

            <div className="rate-transportation">
              <h3>Accessibility</h3>
              <p>How easy was it to get here via public transportation?</p>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={result.rating.accessibility} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>

            <div className="rate-qualitycare">
              <h3>Quality of Care</h3>
              <p>Please rate the quality of service (waiting time, courtesy, explanation of your health/management)</p>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={result.rating.qualityofcare} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>

            <h3> Comments </h3>
            <p> Please leave any comments that might help others who are looking for healthcare. Limit 160 char. </p>

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
