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
import GoogleMap from 'google-map-react';

import UpdateResource from '../components/UpdateResource.jsx';
import FlagContent from '../components/FlagContent.jsx';



const styles = {
    mainStyle: {

        height: '100%',
        width: '100%',
        alignment: 'right',
        display: 'inline-block',
    },

    mapStyle: {

        height: '100px',
        width: '100%',
    },

     cardStyle: {
        display: 'flex',
        flex:1,
        flexDirection: 'column',
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
  chip: {
    margin: 4,
  },
  feedbackWrapper: {
     display: 'flex',
     flexDirection: 'row'
 },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

};


export default class ClinicPage extends React.Component {
constructor(props) {
    super(props);


    this.state = {
    chipData: [
      {key: 0, label: 'asdf'
      }
    ]};

    this.defaults = {
      zoom: 16,
      center: {lat: 33.7490, lng: -84.3880},
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
        style={styles.chip}
      >
        {data.label}
      </Chip>
    );
  }



  render () {
    const {result} = this.props;
    const {displaySearch} = this.props;
    const reviews_=result.reviews;
    const numberReviews=reviews_.length;


    return (
        <div id='clinicpage'>

        <Paper style={styles.mainStyle} zDepth={1}>


        <div className="hello" onClick={displaySearch}>
          <h3>« Back to search</h3>
        </div>
        <Card style ={styles.cardStyle}>

        <CardHeader title={result.name} subtitle={result.civic_address} avatar="https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300"/>
        <CardText>
            <div style={styles.cardStyle}>
            <div style={styles.dataStyle}>

              <div style={styles.mapStyle}>
                 <GoogleMap
                    defaultCenter={this.defaults.center}
                    defaultZoom={this.defaults.zoom}
                    hoverDistance={40}
                    bootstrapURLKeys={{
                    key: 'AIzaSyClWk0ocan4KfAoOA51Z0HDdIa847fhpTM',
                    language: 'en'}}>

                    <Place lat={result.lat}
                                  lng={result.lng}
                                  text={"a"} />
                </GoogleMap>

                </div>
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
          title="Feedback">{"("+numberReviews+" user opinions)"}</CardHeader>
        <CardText>

        <div style={styles.feedbackWrapper}>

          <div style={styles.ratingsSection}>

           <div>
              <h3>Service</h3>

              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={3} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />
            </div>

            <div>
              <h3>Transportation</h3>

              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={3} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>

            <div>
              <h3>Quality of Care</h3>

              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={3} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>
            <div>
              <h3>Tags:</h3>
               <div style={styles.wrapper}>
                    {result.tags.map((tag)=>(<Chip style={styles.chipStyle}>{tag}</Chip>))}
                </div>
            </div>
          </div>
          <div>
            <h3> Reviews: </h3>
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
                value={0} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={()=>this.setState(rating.accessibility)}
              />

            </div>

            <div className="rate-transportation">
              <h3>Accessibility</h3>
              <p>How easy was it to get here via public transportation?</p>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={0} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>

            <div className="rate-qualitycare">
              <h3>Quality of Care</h3>
              <p>Please rate the quality of service (waiting time, courtesy, explanation of your health/management)</p>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={0} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />

            </div>

            <h3> Comments </h3>
            <p> Please leave any comments that might help others who are looking for healthcare. Limit 160 char. </p>

                <input type="text"
                         value={this.state.label}
                       onChange={(event) => this.submitFeedback(event)}/>
                <br />

                 <div style={styles.wrapper}>
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

class Place extends React.Component {
 render() {
   const K_WIDTH = 15;
   const K_HEIGHT = 15;

   const styleHover = {
   // initially any map object has left top corner at lat lng coordinates
   // it's on you to set object origin to 0,0 coordinates
   position: 'absolute',
   width: K_WIDTH,
   height: K_HEIGHT,
   left: -K_WIDTH / 2,
   top: -K_HEIGHT / 2,

   border: '5px solid #4DD0E1',
   borderRadius: K_HEIGHT,
   backgroundColor: '#B2EBF2',
   textAlign: 'center',
   color: '#F06292',
   fontSize: 16,
   fontWeight: 'bold',
   padding: 4
 };

 const style = {
 // initially any map object has left top corner at lat lng coordinates
 // it's on you to set object origin to 0,0 coordinates
 position: 'absolute',
 width: K_WIDTH,
 height: K_HEIGHT,
 left: -K_WIDTH / 2,
 top: -K_HEIGHT / 2,

 border: '3px solid #F06292',
 borderRadius: K_HEIGHT,
 backgroundColor: 'white',
 textAlign: 'center',
 color: '#3f51b5',
 fontSize: 12,
 fontWeight: 'bold',
 padding: 4
};
 return (
    <div style={this.props.$hover ? styleHover : style}>
       {this.props.text}
    </div>
   );
 }
};
