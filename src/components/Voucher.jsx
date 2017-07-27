/* jslint node: true, esnext: true */
'use strict';

// JavaScript source code
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MapsLocalPrintshop from 'material-ui/svg-icons/maps/local-printshop';


export default class Voucher extends React.Component {

    printWindow() {
      window.print();
    }

    render() {

      const { clinicInfo } = this.props;

      return (

        <div>

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
          <p>Get X% off your next visit</p>
          <h2> Make sure to bring these with you</h2>
          <ul>
            <li>Drivers License</li>
            <li>Utility Bill</li>
            <li>Something</li>
          </ul>
          <p> Address: {clinicInfo.civic_address} </p>
          <p> Phone: {clinicInfo.phone} </p>

        </div>
      )

    }

}
