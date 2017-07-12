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
    input: {
        margin: 10,
        marginRight:10,
        paddingLeft:10
    },
    button: {
        marginTop: 7,
        marginRight:10,
        padding:5
    },
    wrapper:{
        overflow:'hidden'
    },
    filterButton: {
        color: 'white',
        margin: 5,
        float:'right',
        backgroundColor: '#000000',
        border: 'none',
        borderRadius: 8,
        fontSize: 14,
    },
    selected: {
        color: 'white',
        margin: 5,
        float:'right',
        backgroundColor: '#707070',
        border: 'none',
        borderRadius: 8,
        fontSize: 14,
    },
    raisedButton: {
        position: 'relative',
        zIndex: 0,
        color:'#FFFFFF'
    }
};


export default class SearchInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    getOptions(index){

    if(index==0||(index<=10&&index>6)){
        return(
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
            <button type="button"
                    onClick={() => this.onSelect(7)}
                    style={index===7?styles.selected:styles.filterButton}> Check-up/Physical Exam </button>
            <button type="button"
                    onClick={() => this.onSelect(8)}
                    style={index===8?styles.selected:styles.filterButton}> Emergency rooms </button>
            <button type="button"
                    onClick={() => this.onSelect(9)}
                    style={index===9?styles.selected:styles.filterButton}>Chronic Disease Management</button>
            <button type="button"
                    onClick={() => this.onSelect(10)}
                    style={index===10?styles.selected:styles.filterButton}>STD Testing</button>
        </div>);
    }
    else if(index==1||(index<20&&index>10)){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button"
                  onClick={() => this.onSelect(11)}
                  style={index===11?styles.selected:styles.filterButton}>Pregnancy Test</button>
          <button type="button"
                  onClick={() => this.onSelect(12)}
                  style={index===12?styles.selected:styles.filterButton}>Pap Smear</button>
          <button type="button"
                  onClick={() => this.onSelect(13)}
                  style={index===13?styles.selected:styles.filterButton}>Mammogram</button>
          <button type="button"
                  onClick={() => this.onSelect(14)}
                  style={index===14?styles.selected:styles.filterButton}>Birth Control</button>
      </div>);
    }else if(index==2||(index<30&&index>20)){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button"
                  onClick={() => this.onSelect(21)}
                  style={index===21?styles.selected:styles.filterButton}>Immunization</button>
          <button type="button"
                  onClick={() => this.onSelect(22)}
                  style={index===22?styles.selected:styles.filterButton}>Check-up</button>
          <button type="button"
                  onClick={() => this.onSelect(23)}
                  style={index===23?styles.selected:styles.filterButton}>Emergency</button>
      </div>);
    }else if(index==3||(index<40&&index>30)){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button"
                  onClick={() => this.onSelect(31)}
                  style={index===31?styles.selected:styles.filterButton}>Behavioral Health</button>
          <button type="button"
                  onClick={() => this.onSelect(32)}
                  style={index===32?styles.selected:styles.filterButton}>Counseling</button>
          <button type="button"
                  onClick={() => this.onSelect(33)}
                  style={index===33?styles.selected:styles.filterButton}>Psychiatric Emergency</button>
      </div>);
    }else if(index==4||(index<50&&index>40)){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button"
                  onClick={() => this.onSelect(41)}
                  style={index===41?styles.selected:styles.filterButton}>Basic filling/extraction</button>
          <button type="button"
                  onClick={() => this.onSelect(42)}
                  style={index===42?styles.selected:styles.filterButton}>Cleaning</button>
          <button type="button"
                  onClick={() => this.onSelect(43)}
                  style={index===43?styles.selected:styles.filterButton}>Advanced dental</button>
      </div>);
    }else if(index==5||(index<60&&index>50)){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button"
                  onClick={() => this.onSelect(51)}
                  style={index===51?styles.selected:styles.filterButton}>Vision testing</button>
          <button type="button"
                  onClick={() => this.onSelect(52)}
                  style={index===52?styles.selected:styles.filterButton}>Retina</button>
      </div>);
    }else if(index==6||(index<70&&index>60)){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button"
                  onClick={() => this.onSelect(61)}
                  style={index===61?styles.selected:styles.filterButton}>Housing and Shelters</button>
          <button type="button"
                  onClick={() => this.onSelect(62)}
                  style={index===62?styles.selected:styles.filterButton}>Food Pantries</button>
          <button type="button"
                  onClick={() => this.onSelect(63)}
                  style={index===63?styles.selected:styles.filterButton}>Employment Assistance</button>
          <button type="button"
                  onClick={() => this.onSelect(64)}
                  style={index===64?styles.selected:styles.filterButton}>Veteran Services</button>
          <button type="button"
                  onClick={() => this.onSelect(65)}
                  style={index===65?styles.selected:styles.filterButton}>Clothing</button>
          <button type="button"
                  onClick={() => this.onSelect(66)}
                  style={index===66?styles.selected:styles.filterButton}>Identification</button>
      </div>);
    }
    }

    componentDidMount() {
        this.searchSizer();
        window.addEventListener('resize', () => this.searchSizer(), false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.searchSizer, false);
    }


    searchSizer() {
        const { container} = this.props;
        const { offsetHeight, offsetWidth } = container;
        this.setState({ offsetHeight, offsetWidth });
    }


    render() {
        const { filterResources, getSearchstring, getselectedIndex, onSelect } = this.props;
        this.onSelect = onSelect;
        var index = getselectedIndex();
        var { offsetWidth, offsetHeight } = this.state;
        if (offsetWidth=== undefined) {
            return null;
        }



        return (

        <div>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',width: {offsetWidth}, padding:8}}>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===100?"#707070":"#000000"}
                hoverColor='#707070'
                label="All Results"
                onTouchTap={()=>onSelect(100)}
                icon={<ActionHome />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===0?"#707070":"#000000"}
                label="Adult"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(0)}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===1?"#707070":"#000000"}
                label="Women's Health"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(1)}
                icon={<ActionPregnantWoman />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===2?"#707070":"#000000"}
                label="Child"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(2)}
                icon={<PlacesChildCare />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===3?"#707070":"#000000"}
                hoverColor='#707070'
                onTouchTap={()=>onSelect(3)}
                label="Mental Health"
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===4?"#707070":"#000000"}
                onTouchTap={()=>onSelect(4)}
                hoverColor='#707070'
                label="Dental"
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===5?"#707070":"#000000"}
                hoverColor='#707070'
                label="Vision"
                onTouchTap={()=>onSelect(5)}
                icon={<ActionVisibility />}
                style={styles.raisedButton}/>
            </div>
            <div style={styles.button}>
              <FlatButton
                backgroundColor={index===6?"#707070":"#000000"}
                label="Food, Housing, and other"
                hoverColor='#707070'
                onTouchTap={()=>onSelect(6)}
                style={styles.raisedButton}/>
            </div>
        </div>
          {this.getOptions(index)}
        </div>
        );
    }
}
