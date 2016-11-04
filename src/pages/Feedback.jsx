import React from 'react';



//export default class Feedback
export default class Feedback extends React.Component {


    render () {
    

        return (

        	<div class="feedback-container">
        		<div class="rate-service">
        			<h3>Service</h3> //include rating stars here
        		</div>
        		<div class="rate-transportation">
        			<h3>Transportation</h3> //including rating stars here
        		</div>
        		<div class="rate-qualitycare">
        			<h3>Quality of Care</h3> //include rating stars here
        		</div>

        	</div> //end of feedback-container
    ); //emd of return
} //end of render
} //end export