/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    hint: {
        color: '#FFFFFF',
    },
    div:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        overflow:'hidden'
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
    },
    label2:{
      fontSize:12,
    }
};

export default class SearchInputs extends React.Component {

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
        <div>
          <div style={styles.div}>

              <div style={styles.button}>
                <RaisedButton icon={<EditorAttachMoney />} backgroundColor={this.state.showPrice? '#C0C0C0' : '#FFFFFF'} onTouchTap={()=>this.setState({showPrice:!this.state.showPrice})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Adult" backgroundColor={this.state.showAdult? '#C0C0C0' : '#FFFFFF'} onTouchTap={()=>this.setState({showAdult:!this.state.showAdult})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Child" backgroundColor={this.state.showChild? '#C0C0C0' : '#FFFFFF'} onTouchTap={()=>this.setState({showChild:!this.state.showChild})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Dental" backgroundColor={this.state.showDental? '#C0C0C0' : '#FFFFFF'} onTouchTap={()=>this.setState({showAdult:!this.state.showDental})}/>
              </div>

              <div style={styles.button}>
                <RaisedButton label="Vision" backgroundColor={this.state.showVision? '#C0C0C0' : '#FFFFFF'} onTouchTap={()=>this.setState({showAdult:!this.state.showVision})}/>
              </div>

              <div id="hide-mobile">
                <TextField
                  onChange={e => filterResources(e.target.value)}
                  hintText="  Or enter search term..."
                  hintStyle={styles.hint}
                  />
              </div>
          </div>

          <div style={styles.div}>
            {this.state.showPrice? (<div style={styles.div}>
                <div style={styles.button2}>
                  <RaisedButton label="Medicaid" labelStyle={styles.label2}/>
                </div>
                <div style={styles.button2}>
                  <RaisedButton label="Free" labelStyle={styles.label2}/>
                </div>
                <div style={styles.button2}>
                  <RaisedButton label="Sliding-scale" labelStyle={styles.label2}/>
                </div>
                </div>): (<div></div>)}

              {this.state.showAdult? (<div style={styles.div}>
                  <div style={styles.button2}>
                    <RaisedButton label="Pregnancy" labelStyle={styles.label2}/>
                  </div>
                  <div style={styles.button2}>
                    <RaisedButton label="Mental Health" labelStyle={styles.label2}/>
                  </div>
                  <div style={styles.button2}>
                    <RaisedButton label="STD testing" labelStyle={styles.label2}/>
                  </div>
                  <div style={styles.button2}>
                    <RaisedButton label="Check-up" labelStyle={styles.label2}/>
                  </div>
                  </div>): (<div></div>)}

            </div>
          </div>
        );
    }
}
