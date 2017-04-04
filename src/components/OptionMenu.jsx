/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { cyan200, indigo900 } from 'material-ui/styles/colors';

const styles = {
    hint: {
        color: '#FFFFFF',
    },
    row:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        overflow:'auto'
    },
    wrapper:{
    },
    button:{
      marginTop:7,
      marginRight:5
    },
    button2:{
      marginRight:5,
      minheight:10,
    },
    label1:{
      fontSize:14,
      fontColor:'black'
    },
    label2:{
    }
};

export default class OptionMenu extends React.Component {

  constructor() {
      super();

      // this component's state stores/dynamically presents options that user has selected
      this.state = {
          showPrice:false,
          showChild:false,
          showAdult:false,
          showDental:false,
          showVision:false,
      };


  }

    render() {
        const { filterResources, getSearchstring} = this.props;
        var searchString=getSearchstring();
        return (
        <div style={styles.wrapper}>
          <div style={styles.row}>

              <div style={styles.button}>
                <RaisedButton icon={<EditorAttachMoney />} backgroundColor={this.state.showPrice? '#C0C0C0' : cyan200} onTouchTap={()=>this.setState({showPrice:!this.state.showPrice})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Adult" backgroundColor={this.state.showAdult? '#C0C0C0' : cyan200} onTouchTap={()=>this.setState({showAdult:!this.state.showAdult})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Child" backgroundColor={this.state.showChild? '#C0C0C0' : cyan200} onTouchTap={()=>this.setState({showChild:!this.state.showChild})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Dental" backgroundColor={this.state.showDental? '#C0C0C0' : cyan200} onTouchTap={()=>this.setState({showAdult:!this.state.showDental})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Vision" backgroundColor={this.state.showVision? '#C0C0C0' : cyan200} onTouchTap={()=>this.setState({showAdult:!this.state.showVision})}/>
              </div>

          </div>

          <div style={styles.row}>
          <p>
          </p>
            {this.state.showPrice? (<div style={styles.row}>
                <div style={styles.button2}>
                  <FlatButton label="Medicaid" labelStyle={styles.label2}/>
                </div>
                <div style={styles.button2}>
                  <FlatButton label="Free" labelStyle={styles.label2}/>
                </div>
                <div style={styles.button2}>
                  <FlatButton label="Sliding scale" labelStyle={styles.label2}/>
                </div>
                </div>): (<div></div>)}

              {this.state.showAdult? (<div style={styles.row}>
                  <div style={styles.button2}>
                    <FlatButton label="Pregnancy" labelStyle={styles.label2}/>
                  </div>
                  <div style={styles.button2}>
                    <FlatButton label="Mental Health" labelStyle={styles.label2}/>
                  </div>
                  <div style={styles.button2}>
                    <FlatButton label="STD testing" labelStyle={styles.label2}/>
                  </div>
                  <div style={styles.button2}>
                    <FlatButton label="Check up" labelStyle={styles.label2}/>
                  </div>
                  </div>): (<div></div>)}

            </div>
          </div>
        );
    }
}
