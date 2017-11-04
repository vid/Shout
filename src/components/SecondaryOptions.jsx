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
    wrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:2,
        justifyContent: "center"
    },
    filterButton2: {
        color: 'black',
        background:'#E8E8E8'
    },
    selected2: {
        color: 'black',
        background:'#E8E8E8'
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
                backgroundColor={index===7?"#E8E8E8":"#D3D3D3"} label=" Showing All Results "/>
        </div>
        )
    }
    else if(index==0||(index<=10&&index>6)){
        return(
        <div style={styles.wrapper}>
            <FlatButton
                    onClick={() => this.onSelect(7)}
                    backgroundColor={index===7?"#E8E8E8":"#D3D3D3"}
                    label="Check-up" />
            <FlatButton
                    onClick={() => this.onSelect(8)}
                    backgroundColor={index===8?"#E8E8E8":"#D3D3D3"}
                    label="Emergency rooms"/>
            <FlatButton
                    onClick={() => this.onSelect(9)}
                    backgroundColor={index===9?"#E8E8E8":"#D3D3D3"} label="Chronic Disease Management"/>
            <FlatButton
                    onClick={() => this.onSelect(10)}
                    backgroundColor={index===10?"#E8E8E8":"#D3D3D3"} label="STD Testing"/>
        </div>);
    }
    else if(index==1||(index<20&&index>10)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(11)}
                  backgroundColor={index===11?"#E8E8E8":"#D3D3D3"} label="Pregnancy Test"/>
          <FlatButton
                  onClick={() => this.onSelect(12)}
                  backgroundColor={index===12?"#E8E8E8":"#D3D3D3"} label="Pap Smear"/>
          <FlatButton
                  onClick={() => this.onSelect(13)}
                  backgroundColor={index===13?"#E8E8E8":"#D3D3D3"} label="Mammogram"/>
          <FlatButton
                  onClick={() => this.onSelect(14)}
                  backgroundColor={index===14?"#E8E8E8":"#D3D3D3"} label="Birth Control"/>
      </div>);
    }else if(index==2||(index<30&&index>20)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(21)}
                  backgroundColor={index===21?"#E8E8E8":"#D3D3D3"} label="Immunization"/>
          <FlatButton
                  onClick={() => this.onSelect(22)}
                  backgroundColor={index===22?"#E8E8E8":"#D3D3D3"} label="Check-up"/>
          <FlatButton
                  onClick={() => this.onSelect(23)}
                  backgroundColor={index===23?"#E8E8E8":"#D3D3D3"} label="Emergency"/>
      </div>);
    }else if(index==3||(index<40&&index>30)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(31)}
                  backgroundColor={index===31?"#E8E8E8":"#D3D3D3"} label="Behavioral Health"/>
          <FlatButton
                  onClick={() => this.onSelect(32)}
                  backgroundColor={index===32?"#E8E8E8":"#D3D3D3"} label="Counseling"/>
          <FlatButton
                  onClick={() => this.onSelect(33)}
                  backgroundColor={index===33?"#E8E8E8":"#D3D3D3"} label="Psychiatric Emergency"/>
      </div>);
    }else if(index==4||(index<50&&index>40)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(41)}
                  backgroundColor={index===41?"#E8E8E8":"#D3D3D3"} label="Basic filling/extraction"/>
          <FlatButton
                  onClick={() => this.onSelect(42)}
                  backgroundColor={index===42?"#E8E8E8":"#D3D3D3"} label="Cleaning"/>
          <FlatButton
                  onClick={() => this.onSelect(43)}
                  backgroundColor={index===43?"#E8E8E8":"#D3D3D3"} label="Advanced dental"/>
      </div>);
    }else if(index==5||(index<60&&index>50)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(51)}
                  backgroundColor={index===51?"#E8E8E8":"#D3D3D3"} label="Vision testing"/>
          <FlatButton
                  onClick={() => this.onSelect(52)}
                  backgroundColor={index===52?"#E8E8E8":"#D3D3D3"} label="Retina"/>
      </div>);
    }else if(index==6||(index<70&&index>60)){
      return(
      <div style={styles.wrapper}>
          <FlatButton
                  onClick={() => this.onSelect(61)}
                  backgroundColor={index===61?"#E8E8E8":"#D3D3D3"} label="Housing and Shelters"/>
          <FlatButton
                  onClick={() => this.onSelect(62)}
                  backgroundColor={index===62?"#E8E8E8":"#D3D3D3"} label="Food Pantries"/>
          <FlatButton
                  onClick={() => this.onSelect(63)}
                  backgroundColor={index===63?"#E8E8E8":"#D3D3D3"} label="Employment Assistance"/>
          <FlatButton
                  onClick={() => this.onSelect(64)}
                  backgroundColor={index===64?"#E8E8E8":"#D3D3D3"} label="Veteran Services"/>
          <FlatButton
                  onClick={() => this.onSelect(65)}
                  backgroundColor={index===65?"#E8E8E8":"#D3D3D3"} label="Clothing"/>
          <FlatButton
                  onClick={() => this.onSelect(66)}
                  backgroundColor={index===66?"#E8E8E8":"#D3D3D3"} label="Identification"/>
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
