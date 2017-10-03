/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import PlacesChildCare from 'material-ui/svg-icons/places/child-care';

const styles = {
    hint: {
        color: '#A9A9A9',
    },
    wrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:8,
        justifyContent: "center"
    },
    filterButton: {
        color: 'black',
        margin: 5,
    },
    selected: {
        color: 'gray',
        margin: 5,
    },
};


export default class SecondaryOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    getOptions(index){

    if(index==100){
        return(
        <div style={styles.wrapper}>
          <FlatButton
                style={index===7?styles.selected:styles.filterButton}> Showing All Results </FlatButton>
        </div>
        )
    }
    else if(index==0||(index<=10&&index>6)){
        return(
        <div style={styles.wrapper}>
            <FlatButton
                    onClick={() => this.onSelect(7)}
                    style={index===7?styles.selected:styles.filterButton}> Check-up/Physical Exam </FlatButton>
            <FlatButton
                    onClick={() => this.onSelect(8)}
                    style={index===8?styles.selected:styles.filterButton}> Emergency rooms </FlatButton>
            <FlatButton
                    onClick={() => this.onSelect(9)}
                    style={index===9?styles.selected:styles.filterButton}>Chronic Disease Management</FlatButton>
            <FlatButton
                    onClick={() => this.onSelect(10)}
                    style={index===10?styles.selected:styles.filterButton}>STD Testing</FlatButton>
        </div>);
    }
    else if(index==1||(index<20&&index>10)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(11)}
                  style={index===11?styles.selected:styles.filterButton}>Pregnancy Test</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(12)}
                  style={index===12?styles.selected:styles.filterButton}>Pap Smear</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(13)}
                  style={index===13?styles.selected:styles.filterButton}>Mammogram</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(14)}
                  style={index===14?styles.selected:styles.filterButton}>Birth Control</FlatButton>
      </div>);
    }else if(index==2||(index<30&&index>20)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(21)}
                  style={index===21?styles.selected:styles.filterButton}>Immunization</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(22)}
                  style={index===22?styles.selected:styles.filterButton}>Check-up</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(23)}
                  style={index===23?styles.selected:styles.filterButton}>Emergency</FlatButton>
      </div>);
    }else if(index==3||(index<40&&index>30)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(31)}
                  style={index===31?styles.selected:styles.filterButton}>Behavioral Health</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(32)}
                  style={index===32?styles.selected:styles.filterButton}>Counseling</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(33)}
                  style={index===33?styles.selected:styles.filterButton}>Psychiatric Emergency</FlatButton>
      </div>);
    }else if(index==4||(index<50&&index>40)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(41)}
                  style={index===41?styles.selected:styles.filterButton}>Basic filling/extraction</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(42)}
                  style={index===42?styles.selected:styles.filterButton}>Cleaning</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(43)}
                  style={index===43?styles.selected:styles.filterButton}>Advanced dental</FlatButton>
      </div>);
    }else if(index==5||(index<60&&index>50)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(51)}
                  style={index===51?styles.selected:styles.filterButton}>Vision testing</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(52)}
                  style={index===52?styles.selected:styles.filterButton}>Retina</FlatButton>
      </div>);
    }else if(index==6||(index<70&&index>60)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(61)}
                  style={index===61?styles.selected:styles.filterButton}>Housing and Shelters</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(62)}
                  style={index===62?styles.selected:styles.filterButton}>Food Pantries</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(63)}
                  style={index===63?styles.selected:styles.filterButton}>Employment Assistance</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(64)}
                  style={index===64?styles.selected:styles.filterButton}>Veteran Services</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(65)}
                  style={index===65?styles.selected:styles.filterButton}>Clothing</FlatButton>
          <FlatButton
                  onClick={() => this.onSelect(66)}
                  style={index===66?styles.selected:styles.filterButton}>Identification</FlatButton>
      </div>);
    }
    }


    render() {
        const {getselectedIndex, onSelect } = this.props;
        this.onSelect = onSelect;
        var index = getselectedIndex();



        return (
        <div>
          {this.getOptions(index)}
        </div>
        );
    }
}
