import React from "react";

const FiveDaysForecastDisplay = props => (
	<div className="weather__info">
	 <div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
	 }
	</div>
);

export default FiveDaysForecastDisplay;