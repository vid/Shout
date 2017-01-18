'use strict';

import React, {
    Component
} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {
    Card,
    CardActions,
    CardHeader,
    CardText,
    CardTitle,
    CardMedia
} from 'material-ui/Card';
import {cyan300, indigo900} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Rater from 'react-rater';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import StarRatingComponent from 'react-star-rating-component';
import GoogleMap from 'google-map-react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import UpdateResource from '../components/UpdateResource.jsx';
import FlagContent from '../components/FlagContent.jsx';


//* ***************************************** *//
//* all styles defined here
//* ***************************************** *//

const styles = {

    button: {
        margin: '5px',
        padding: '5px'
    },

    cardStyle: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: '5px'
    },

    chip: {
        margin: 4,
        height: '80%',
        backgroundColor: cyan300,
        fontColor: '#FFFFFF'
    },

    chipInfo: {
        padding: 6,
        height: '80%',
    },

    dataStyle: {
        margin: '5px',
        height: '100%',
    },

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

    reviews: {
        margin: '10',
        height: '100%',
    },

    list: {
        listStyle: 'none',
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

    //constructor
    constructor(props) {
        super(props);

        this.state = {
            submitfeedbackOpen: false,
            flagcontentOpen: false,
            feedbackExpanded:false,

            value_Author: "",
            accessibilityRating: 0,
            qualityRating: 0,
            affordabilityRating: 0,
            value_Descript: "",
            previous_Tags: [],
            chipData: []
        };

        this.defaults = {
            zoom: 16,
            center: {
                lat: 33.7490,
                lng: -84.3880
            },
        };
    }

//* ***************************************** *//
    //Begin actions
//* ***************************************** *//


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

    formatFeedbacks(revs) {

        if (revs.length === 0) {
            return "No feedback yet. Would you like to add one?";
        }
        else if(revs.length<3){

        return revs.map((feedback, i) =>
            <li key={feedback._id}><b>{"Author: "+feedback.author}</b>
            <div>Accessibility: {feedback.accessibility+"/5"} </div>
            <div>Quality: {feedback.quality+"/5"} </div>
            <div>Affordability: {feedback.affordability+"/5"}</div>
            <div><b>Comments:</b>{feedback.text}</div></li>);
            <br />
        }
        else {

        var revs_a=revs.slice(0,3);
        return revs_a.map((feedback, i) =>
            <li key={feedback._id}><b>{"Author: "+feedback.author}</b>
            <div>Accessibility: {feedback.accessibility+"/5"} </div>
            <div>Quality: {feedback.quality+"/5"} </div>
            <div>Affordability: {feedback.affordability+"/5"}</div>
            <div><b>Comments:</b>{feedback.text}</div></li>);
            <br />

        }

    }

    viewAllFeedbacks(revs) {

    if(this.state.feedbackExpanded){

        if(revs.length>=3){

            var revs_a=revs.slice(3,revs.length);
            return revs_a.map((feedback, i) =>
                <li key={feedback._id}><b>{"Author: "+feedback.author}</b>
                <div>Accessibility: {feedback.accessibility+"/5"} </div>
                <div>Quality: {feedback.quality+"/5"} </div>
                <div>Affordability: {feedback.affordability+"/5"}</div>
                <div><b>Comments:</b>{feedback.text}</div></li>);
                <br />
        }

        else {

        return "No more feedback to show";

        }
    }

    else return "";

    }

    getRating(result, id) {

        if (results.reviews.length() === 0) {
            return 0;
        }
        if (id === '0') {
            return result.ratings.overall;
        }
        if (id === '1') {
            return result.ratings.quality;
        }
        if (id === '2') {
            return result.ratings.accessibility;
        }
        if (id === '3') {
            return result.ratings.affordability;
        }
        return 0;

    }

    searchSizer() {
        const {
            container,
            footer
        } = this.props;
        const {
            offsetHeight,
            offsetWidth
        } = container;
        const footerOffsetHeight = footer.offsetHeight;
        this.setState({
            offsetHeight,
            offsetWidth,
            footerOffsetHeight
        });
    }

    formatSubmission(name) {

        var temp = {
            name: name,
            author: this.state.value_Author,
            accessibility:this.state.accessibilityRating,
            quality:this.state.qualityRating,
            affordability:this.state.affordabilityRating,
            text: this.state.value_Descript
        }

        return temp;

    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }

    render() {

        const {addTags,getTags,getFeedbacks} = this.props;
        const previousTags = getTags();
        const allFeedbacks = getFeedbacks();
        const {offsetWidth,offsetHeight,footerOffsetHeight} = this.state;
        if (offsetHeight === undefined) {
            return null;
        }
        const {result} = this.props;
        const {displaySearch} = this.props;
        const {addFeedback} = this.props;
        var expandedFeedback = this.viewAllFeedbacks(allFeedbacks);

        return (

            <div style={{height: (offsetHeight), overflow: 'auto'}}>
      <Paper style={styles.mainStyle} zDepth={1}>

{/* ***************************************** */}
{/* Section 1 */}
{/* ***************************************** */}

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

              </div>
            </div>
        </CardText>
      </Card>

{/* ***************************************** */}
{/* Section 3: Short Description*/}
{/* ***************************************** */}
      <Card style ={styles.cardStyle}>
        <CardHeader title="Description"/>
          <CardText>
            {result.description}
          </CardText>
        </Card>

{/* ***************************************** */}
{/* Section 2: List of tags */}
{/* ***************************************** */}
      <Card style ={styles.cardStyle}>
      <CardHeader title="Tags"/>
        <CardText>
          <ul style={styles.list}>
        {previousTags.map((tag, i) =>
              <li style={styles.list} key={i}><div style={styles.wrapper}>
              <Chip style={styles.chip}>
              <b>{tag.value+"  "}</b>
              </Chip>
              <div style={styles.chipInfo}>{"("+tag.count+" users vouched for this)"}</div>
              </div>
                      </li>
                      )}
          </ul>
        </CardText>
      </Card>


{/* ***************************************** */}
{/* Section 4: Feedback */}
{/* ***************************************** */}
      <Card style ={styles.cardStyle}>
          <CardHeader
          title="Feedback"/>
          <CardText>
            <div style={styles.feedbackWrapper}>
            <div style={styles.ratingsSection}>
            <div>
              <h3>Average Accessibility</h3>
              <p> Reflects waiting time for appointments/walk-in. </p>
              <StarRatingComponent
                name="accessibility" /* name of the radio input, it is required */
                value={()=>this.getRating("0")} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />
            </div>
            <div>
              <h3>Average Quality of Care</h3>
              <p> Reflects  </p>
              <StarRatingComponent
                name="Quality" /* name of the radio input, it is required */
                value={()=>this.getRating("1")} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />
            </div>
            <div>
              <h3>Average Affordability</h3>
              <StarRatingComponent
                name="Affordability" /* name of the radio input, it is required */
                value={()=>this.getRating("2")} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
              />
            </div>
            <div>
              <h3>Overall</h3>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={()=>this.getRating("3")} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={()=>this.setState(rating.accessibility)}
              />
            </div>
            <div>

                                  <RaisedButton
                                    style={styles.button}
                                    label="Submit Feedback"
                                    primary={true}
                                    onTouchTap={() => this.setState({submitfeedbackOpen: true})}/>

                                  <RaisedButton
                                    label="Flag this Content"
                                    style={styles.button}
                                    secondary={true}
                                    onTouchTap={() => this.setState({flagcontentOpen: true})}/>
            </div>
          </div>
          <div style={styles.reviews}>




            <div style={styles.reviews}>
            {this.formatFeedbacks(allFeedbacks)}
            </div>

            <FlatButton onClick={()=>this.setState({feedbackExpanded:!this.state.feedbackExpanded})} label={">> Click to expand/collapse all ("+allFeedbacks.length+")"}/>

            <div>
            {expandedFeedback}
            </div>

          </div>
        </div>

        </CardText>
      </Card>

{/* ***************************************** */}
{/* Section 5: Submit Feedback */}
{/* ***************************************** */}
{/* ***************************************** */}
{/* ***************************************** */}
<Dialog
    title="Submit Feedback"
    actions={[
       <FlatButton
         label="Cancel"
         primary={true}
         onTouchTap={() => this.setState({submitfeedbackOpen: false})}/>,
       <FlatButton
         label="Submit"
         primary={true}
         keyboardFocused={true}
         onTouchTap={() =>{
                            var x=this.formatSubmission(result.name);
                            addFeedback(x);
                            this.setState({submitfeedbackOpen: false})
                            }}/>]}

    modal={false}
    open={this.state.submitfeedbackOpen}
    onRequestClose={() => this.setState({submitfeedbackOpen: false})}>

      <CardHeader title="Submit Feedback"/>
      <CardText>
        <div> Fields marked by an asterisk * are required </div>
        <div className="feedback-container">
        <TextField hintText="Your name"
                   inputStyle={styles.input}
                   floatingLabelStyle={styles.floatinglabel}
                   floatingLabelText="author "
                   floatingLabelFixed={true}
                   onChange={(event) => this.setState({value_Author: event.target.value})}/><br />
            <div>
              <h3> Accessibility*</h3>
              <p>How easy was it to book an appointment or walk-in for services?</p>
              <StarRatingComponent
                name="accessibility" /* name of the radio input, it is required */
                value={this.state.accessibilityRating} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={(nextValue, prevValue, name)=>this.setState({accessibilityRating: nextValue})}
              />
            </div>
            <div>
              <h3>Quality of Care *</h3>
              <p>Please rate the quality of service (confidentiality, professionalism, explanation of your health/management)</p>
              <StarRatingComponent
                name="Quality" /* name of the radio input, it is required */
                value={this.state.qualityRating} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={(nextValue, prevValue, name)=>this.setState({qualityRating: nextValue})}
              />
            </div>
            <div>
              <h3>Affordability *</h3>
              <p>Please rate the quality of service (confidentiality, professionalism, explanation of your health/management)</p>
              <StarRatingComponent
                name="Service" /* name of the radio input, it is required */
                value={this.state.affordabilityRating} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                onStarClick={(nextValue, prevValue, name)=>this.setState({affordabilityRating: nextValue})}
              />
            </div>
            <div>
              <h3>Services and Tags</h3>
              <p> Would you like to endorse {result.name} for any of the following services or specialties?</p>
           </div>
           <div>
              <h3> Comments </h3>
              <p> Enter any details that might help others who are looking for healthcare. (Limit 160 char)</p>

              <TextField hintText="Limit 160 char"
                         inputStyle={styles.input}
                         floatingLabelStyle={styles.floatinglabel}
                         floatingLabelText="Comments "
                         floatingLabelFixed={true}
                         multiLine={true}
                         rows={3}
                         rowsMax={10}
                         onChange={(event) => this.setState({value_Descript: event.target.value})}/><br />

                  <br />
                   <div style={styles.wrapper}>
                       {this.state.chipData.map(this.renderChip, this)}
                   </div>
           </div>

          </div>
      </CardText>
    </Dialog>

{/* ***************************************** */}
{/* Section 6: Flag Content */}
{/* ***************************************** */}
<Dialog
    title="Flag Content"
    actions={[
       <FlatButton
         label="Cancel"
         primary={true}
         onTouchTap={() => this.setState({flagcontentOpen: false})}/>,
       <FlatButton
         label="Submit"
         primary={true}
         keyboardFocused={true}
         onTouchTap={() => this.setState({flagcontentOpen: false})}/>]}
    modal={false}
    open={this.state.flagcontentOpen}
    onRequestClose={() => this.setState({flagcontentOpen: false})}>
            <CardText>
            <FlagContent />
            </CardText>
    </Dialog>

    </Paper>
  </div>

        );
    }
}

//* ***************************************** *//
//Typechecking
//* ***************************************** *//

ClinicPage.PropTypes = {
    label: React.PropTypes.string,
}


//Class Place for placing component onto map

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
