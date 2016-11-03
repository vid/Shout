// JavaScript source code
import React from 'react';
import Paper from 'material-ui/Paper';


const style = {
    height: '100%',
    width: '100%',
    padding: '5%',
    margin: 20,
    alignment: 'right',
    display: 'inline-block',

};

export default class About extends React.Component {


    render () {
        const {displaySearch} = this.props;
        return (

          
    <div>
        <Paper style={style} zDepth={2}>
               <div className="hello" onClick={displaySearch}>
                   « Back to search
               </div>
                <h1> About </h1>
            <p>
                Our mission is to technology to help people have better access to healthcare information.
                We believe that the best way to spread healthcare information among marginalized communities is to empower them to inform themselves and each other.
            </p>
        </Paper>
    </div>

    );
}
}