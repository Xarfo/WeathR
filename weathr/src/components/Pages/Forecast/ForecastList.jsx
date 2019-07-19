import React from "react";

const ForecastDisplayList = props =>  
    (
        
        <div>  
         {	
            props.city && props.country && <p className="weather__key"> Location: 
                <span className="weather__value"> { props.city }, { props.country }</span>
            </p> 
        }
        { 	
            props.temperatures && <p className="weather__key"> Temperature: 
                <span className="weather__value"> { props.temperatures }	</span>
            </p> 
        }
        </div>
)



export default ForecastDisplayList;