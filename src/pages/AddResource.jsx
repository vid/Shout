// JavaScript source code
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {cyan200} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';

import {resources} from '../lib/resources.js';


const styles = {
regStyle: {
  
    height: '100%',
    width: '100%',
    padding: '5%',
    margin: 20,
    alignment: 'right',
    display: 'inline-block',
},

hint: {
    color: cyan200,
  },
};

export default class AddResource extends React.Component {

constructor() {
    super();
    this.state = {
        value_Name:'A',
        value_Type:'',
        value_Address:'',
        value_Phone:'',
        value_Descript:'',
        value_Tags:'',
        
        chipData: [
          {key: 0, label: 'Example1'},
          {key: 1, label: 'Example2'},
    ]};
}


submitAll(){

    var temp={
        name: this.state.value_Name,
        civic_address: this.state.value_Address,
        phone: this.state.value_Phone,
        description: this.state.value_Descript,
        type:this.state.value_Type,
    }

    resources[resources.length]=temp;

    alert(resources);
}

handleRequestDelete(key){
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

 renderChip(data) {
    return (
      <Chip key={data.key} onRequestDelete={() =>this.handleRequestDelete(data.key)}>
          {data.label}
      </Chip>
    );
  }

  render () {
    const {displaySearch} = this.props;
    return (

      <div id = "clinicpage">
        <Paper style={styles.regStyle} zDepth={2}>
           <div className="hello" onClick={displaySearch}>
             <h3> << Back to search</h3>
           </div>
            <h1> Add Resource </h1>

          <div>


            <TextField hintText="Name" 
                       hintStyle={styles.hint}
                       floatingLabelText="Resource Name"
                       floatingLabelFixed={true}                   
                       onChange={() => this.setState({value_Name: event.target.value})}/><br />

              <TextField hintText="Clinic" 
                         hintStyle={styles.hint}
                         floatingLabelText="Select Type"
                         floatingLabelFixed={true} 
                         value = {this.state.value_Type}
                         onChange={() => this.setState({value_Type: event.target.value})}/><br />

            <TextField hintText="Street Address" 
                       hintStyle={styles.hint}
                       floatingLabelText="Street Address"
                       floatingLabelFixed={true} 
                       onChange={() => this.setState({value_Address: event.target.value})}/><br />

            <TextField hintText="Phone Number" 
                       hintStyle={styles.hint}
                       floatingLabelText="Phone Number"
                       floatingLabelFixed={true} 
                       onChange={() => this.setState({value_Phone: event.target.value})}/><br />

            <TextField hintText="Description" 
                       hintStyle={styles.hint}
                       floatingLabelText="Description"
                       floatingLabelFixed={true} 
                       onChange={() => this.setState({value_Descript: event.target.value})}/><br />

               <TextField hintText="Enter Tags"
                          hintStyle={styles.hint}
                          floatingLabelText="Tags"
                          floatingLabelFixed={true} 
                          onChange={() => this.setState({value_Tags: event.target.value})}/><br />

              {this.state.chipData.map(this.renderChip, this)}
              <br />
              <br />
                <RaisedButton label="Submit" primary={true} onClick={()=>this.submitAll()}/>
            
          </div>
        </Paper>
      </div>
    );
  }
}