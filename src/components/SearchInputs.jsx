/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';


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
    }
};


export default class SearchInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    getOptions(index){

    if(index==0){
        return(
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
            <button type="button" onClick={() => this.onSelect(7)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14'}}>Check-up/Physical Exam</button>
            <button type="button" onClick={() => this.onSelect(8)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Emergency rooms</button>
            <button type="button" onClick={() => this.onSelect(9)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Chronic Disease Management</button>
            <button type="button" onClick={() => this.onSelect(10)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>STD Testing</button>
        </div>);
    }
    else if(index==1){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button" onClick={() => this.onSelect(11)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Pregnancy Test</button>
          <button type="button" onClick={() => this.onSelect(12)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Pap Smear</button>
          <button type="button" onClick={() => this.onSelect(13)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Mammogram</button>
          <button type="button" onClick={() => this.onSelect(14)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Birth Control</button>
      </div>);
    }else if(index==2){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button" onClick={() => this.onSelect(21)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14'}}>Immunization</button>
          <button type="button" onClick={() => this.onSelect(22)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Check-up</button>
          <button type="button" onClick={() => this.onSelect(23)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Emergency</button>
      </div>);
    }else if(index==3){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button" onClick={() => this.onSelect(31)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14'}}>Behavioral Health</button>
          <button type="button" onClick={() => this.onSelect(32)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Counseling</button>
          <button type="button" onClick={() => this.onSelect(33)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Psychiatric Emergency</button>
      </div>);
    }else if(index==4){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button" onClick={() => this.onSelect(41)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14'}}>Basic filling/extraction</button>
          <button type="button" onClick={() => this.onSelect(42)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Cleaning</button>
          <button type="button" onClick={() => this.onSelect(43)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Advanced dental</button>
      </div>);
    }else if(index==5){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button" onClick={() => this.onSelect(51)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14'}}>Vision testing</button>
          <button type="button" onClick={() => this.onSelect(52)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Surgery</button>
      </div>);
    }else if(index==6){
      return(
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', paddingLeft:8}}>
          <button type="button" onClick={() => this.onSelect(61)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14'}}>Housing and Shelters</button>
          <button type="button" onClick={() => this.onSelect(62)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none',borderRadius: '8', fontSize: '14' }}>Food Pantries</button>
          <button type="button" onClick={() => this.onSelect(63)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Employment Assistance</button>
          <button type="button" onClick={() => this.onSelect(64)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Veteran Services</button>
          <button type="button" onClick={() => this.onSelect(65)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Clothing</button>
          <button type="button" onClick={() => this.onSelect(66)}  style={{ color: 'white',margin: '5px',float:'right', backgroundColor: '#000000', border: 'none' ,borderRadius: '8', fontSize: '14'}}>Identification</button>

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
        const { filterResources, getSearchstring, getselectedIndex, onSelect} = this.props;
        this.onSelect=onSelect;
        var index=getselectedIndex();
        var { offsetWidth, offsetHeight} = this.state;
        if (offsetWidth=== undefined) {
            return null;
        }


        return (

        <div>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',width: {offsetWidth}, padding:8}}>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(0)}>
                All Results
              </Button>
            </div>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(1)}>
                Women's Health
              </Button>
            </div>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(2)}>
                child
            </Button>
            </div>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(3)}>
                Mental Health
              </Button>
            </div>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(4)}>
                Dental
              </Button>
            </div>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(5)}>
                Vision
              </Button>
            </div>
            <div style={styles.button}>
              <Button
                backgroundColor="#000000"
                labelColor="#FFFFFF"
                onTouchTap={()=>onSelect(6)}>
                Others
              </Button>
            </div>
        </div>
        {this.getOptions(index)}
        </div>
        );
    }
}
