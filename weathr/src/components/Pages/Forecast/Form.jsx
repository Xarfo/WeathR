import React from "react";

const Form = props => (
	<form onSubmit={props.getForecast}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Forecast</button>
	</form>
);

export default Form;