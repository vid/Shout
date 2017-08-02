/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MapsLocalPrintshop from 'material-ui/svg-icons/maps/local-printshop';
import Paper from 'material-ui/Paper';


export default class Voucher extends React.Component {

    printWindow() {
      window.print();
    }

    render() {

      const { clinicInfo } = this.props;

      return (

        <Paper style={{height:'100%', padding:10}}>

          {/* Print Voucher Button */
           /* It's probably possible to hide the button in the print dialog */}
          <div style={{zIndex:1, top:75, right:10, position:'absolute'}}>
            <FloatingActionButton
                backgroundColor='#000000'
                onTouchTap={() => this.printWindow()}>
                <MapsLocalPrintshop />
            </FloatingActionButton>
          </div>

          <h1>This is a Voucher for {clinicInfo.name}</h1>
          <p>Reimbursable for $35 or the minimum fee</p>
          <h2> Make sure to bring these with you</h2>
          <ul>
            <li>Government-issued photo ID </li>
            <li>Proof of residency</li>
            <li>Pay stub or proof of income</li>
          </ul>
          <p> <b>Address:</b> {clinicInfo.civic_address} </p>
          <p> <b>Phone:</b> {clinicInfo.phone} </p>
          <p> Hours of Operation: </p>


        </Paper>
      )

    }

}
