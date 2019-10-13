import React from 'react'

const Weather = (props) => {
    console.log(props)
    const output = props.error ? (
        <p>Denied Geolocation</p>
    ) : (
            <div>
                {props.city && props.country && <p>{props.city}, {props.country}</p>}
                {props.temp && <p>{props.temp} &deg;C</p>}
                {props.hi && <p>High: {props.hi} &deg;C</p>}
                {props.low && <p>Low: {props.low} &deg;C</p>}
                <p>{props.desc}</p>
            </div>  
    )

    return(
        <div>
        {output}
        </div>
    )
}

export default Weather