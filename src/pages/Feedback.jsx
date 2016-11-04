import React from 'react';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import Rater from 'react-rater';


//export default class Feedback
export default class Feedback extends React.Component {

constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'Polymer'},
      {key: 3, label: 'ReactJS'},
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
    

        return (

        	<div className="feedback-container">

        		<div className="rate-service">
        			<h3>Service</h3> 
                     <Rater />
        		</div>

        		<div className="rate-transportation">
        			<h3>Transportation</h3> 
                    <Rater />
        		</div>

        		<div className="rate-qualitycare">
        			<h3>Quality of Care</h3> 
                    <Rater />
        		</div>

                <TextField hintText="Tags" 
                       
                       floatingLabelText="Tags"
                       floatingLabelFixed={true}                   
                       onChange={() => this.setState({value_Tags: event.target.value})}/>
                <br />

                <div style={this.styles.wrapper}>
                    {this.state.chipData.map(this.renderChip, this)}
                </div>


        	</div> //end of feedback-container
    ); //emd of return
} //end of render
} //end export