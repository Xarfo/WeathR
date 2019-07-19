import React from "react";
//import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div `
display: flex;
border: solid 2px red;
`

const ForecastDisplayList = props =>  
    (
        
        <div>  
         {	
            props.city && props.country && <p className="weather__key"> Location: 
                <span className="weather__value"> { props.city }, { props.country }</span>
            </p> 
        }
        { 	
            props.temperatures && <p className="weather__key"> <h1>Forecast:</h1> 
            <Wrapper className='day-temp-container'>
            <span>{props.days.map(day => (
                                <ul>
                                    {day}
                                </ul>
                            ))}</span>
                <span className="weather__value"> { props.temperatures.map(temperature => 
                     (
                        <ul>
                            {temperature}
                        </ul>
                    )
                ) }</span>
                </Wrapper>
            </p> 
        }
        </div>
)



export default ForecastDisplayList;
